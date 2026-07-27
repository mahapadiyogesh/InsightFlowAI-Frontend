function SmartFilter() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 h-fit">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Smart Filters
      </h2>

      <div className="space-y-4">

        <div>
          <label className="block text-sm font-medium mb-2">
            Date Range
          </label>

          <input
            type="date"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            State
          </label>

          <select className="w-full border rounded-xl px-4 py-3">
            <option>All States</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            City
          </label>

          <select className="w-full border rounded-xl px-4 py-3">
            <option>All Cities</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Category
          </label>

          <select className="w-full border rounded-xl px-4 py-3">
            <option>All Categories</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Payment Mode
          </label>

          <select className="w-full border rounded-xl px-4 py-3">
            <option>All Payment Modes</option>
          </select>
        </div>

        <button
          className="w-full mt-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Apply Filters
        </button>

        <button
          className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 rounded-xl transition"
        >
          Reset Filters
        </button>

      </div>

    </div>
  );
}

export default SmartFilter;