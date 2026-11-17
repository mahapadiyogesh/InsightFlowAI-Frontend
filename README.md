# InsightFlowAI + Agent
Static app (`index.html`) + one serverless function (`api/agent.js`). No build step.

## Deploy (5 steps)
1. Push this folder to a GitHub repo.
2. Vercel → Add New Project → import the repo (Framework: Other).
3. Settings → Environment Variables: `ANTHROPIC_API_KEY` (required), `ACCESS_CODE` (recommended, any word; you type it once in the site), `ANTHROPIC_MODEL` (optional).
4. Deploy. In the Anthropic console set a monthly spend limit.
5. Local test: `npx vercel dev`.

## How the agent works
- The LLM only **plans** (query spec, formulas, summary). Numbers are computed in your browser, so they cannot be hallucinated.
- **Privacy mode** (default ON): only column names, types and summary stats are sent, never rows.
- Every answer shows "How this was calculated" (the exact spec that ran).
