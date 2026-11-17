// Vercel serverless function: the LLM "brain". It plans; the browser computes.
const SYS = {
  ask: `You are the query planner of a data-analysis agent. You never see all the rows and you never compute numbers: you convert the user's question into a JSON query spec that the browser executes on the data.
Use ONLY column names from the dataset profile. Output ONLY JSON:
{"intro":"one sentence describing what the result shows","filters":[{"col":"","op":"eq|neq|gt|lt|gte|lte|contains","value":""}],"groupBy":"column name or null","metric":{"col":"numeric column or null","agg":"sum|avg|count|min|max"},"sort":"desc|asc","limit":10,"chart":"bar|line|doughnut|none"}
If the question is ambiguous or cannot be answered from these columns, output ONLY {"clarify":"one short question"}. Reply in the same language as the question.`,
  formulas: `You are a senior Power BI / Excel analyst. For the dataset profile, propose 5 to 8 useful measures. For each give a DAX measure (table named 'Data') and an equivalent Excel formula (assume an Excel Table named Data, structured references), using the real column names.
Output ONLY a JSON array: [{"name":"","dax":"","excel":"","why":"one sentence"}]`,
  summary: `Write an executive summary (max 150 words) for the stated audience using ONLY the facts provided. Do not invent numbers. Plain text: 3 to 5 short lines starting with "- ", then one line "Next step: ...". Reply in the language of the audience note if given, else English.`,
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.ANTHROPIC_API_KEY, gem = process.env.GEMINI_API_KEY; // Gemini has a free tier
  if (!key && !gem) return res.status(500).json({ error: "Server needs GEMINI_API_KEY (free) or ANTHROPIC_API_KEY" });
  const gate = process.env.ACCESS_CODE; // optional: stops strangers using your key
  const { action, meta, question, goal, facts, code } = req.body || {};
  if (gate && code !== gate) return res.status(401).json({ error: "Access code required" });
  if (!SYS[action]) return res.status(400).json({ error: "Unknown action" });
  const body = JSON.stringify({ meta, question, goal, facts });
  if (body.length > 20000) return res.status(413).json({ error: "Request too large" });

  const user =
    action === "ask" ? `Dataset profile:\n${JSON.stringify(meta)}\n\nQuestion: ${String(question).slice(0, 500)}`
    : action === "formulas" ? `Dataset profile:\n${JSON.stringify(meta)}`
    : `Audience / goal: ${String(goal || "general business review").slice(0, 200)}\nDataset: ${JSON.stringify(meta)}\nFacts computed by the app:\n${JSON.stringify(facts)}`;

  let text;
  if (gem) {
    const r = await fetch("https://generativelanguage.googleapis.com/v1beta/openai/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${gem}` },
      body: JSON.stringify({
        model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
        max_tokens: 4000,
        messages: [{ role: "system", content: SYS[action] }, { role: "user", content: user }],
      }),
    });
    const j = await r.json();
    if (!r.ok) return res.status(502).json({ error: (Array.isArray(j) ? j[0] : j)?.error?.message || "LLM request failed" });
    text = j.choices?.[0]?.message?.content || "";
  } else {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5",
        max_tokens: action === "summary" ? 600 : 1500,
        system: SYS[action],
        messages: [{ role: "user", content: user }],
      }),
    });
    const j = await r.json();
    if (!r.ok) return res.status(502).json({ error: j.error?.message || "LLM request failed" });
    text = j.content.map((b) => b.text || "").join("");
  }
  if (action === "summary") return res.json({ text });
  try { return res.json({ result: JSON.parse(text.replace(/```json|```/g, "").trim()) }); }
  catch { return res.status(502).json({ error: "Model returned invalid JSON, please retry" }); }
}
