import KPICards from "../components/KPICards";
import DataTable from "../components/DataTable";
import SmartFilter from "../components/SmartFilter";
import BarChartComponent from "../components/BarChartComponent";

function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Welcome Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back, Yogesh 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Data Preview + Smart Filters */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left */}
        <div className="xl:col-span-2">

          <DataTable />

        </div>

        {/* Right */}
        <div>

          <SmartFilter />

        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-5">

          <h2 className="text-xl font-bold mb-4">
            Sales by Category
          </h2>

          <BarChartComponent />

        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-5">

          <h2 className="text-xl font-bold mb-4">
            Sales Distribution
          </h2>

          <div className="h-[260px] flex items-center justify-center text-gray-400 text-xl">
            🥧 Pie Chart
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Line Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-5">

          <h2 className="text-xl font-bold mb-4">
            Sales Trend
          </h2>

          <div className="h-[260px] flex items-center justify-center text-gray-400 text-xl">
            📈 Line Chart
          </div>

        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-2xl shadow-lg p-5">

          <h2 className="text-xl font-bold mb-4">
            AI Insights
          </h2>

          <div className="space-y-4 text-slate-700">

            <div>
              ✅ Revenue increased by <strong>12.5%</strong>.
            </div>

            <div>
              📦 Electronics is the top-performing category.
            </div>

            <div>
              🔥 Highest sales recorded on <strong>18 July</strong>.
            </div>

            <div>
              💰 Profit Margin is improving consistently.
            </div>

          </div>

          <button className="mt-8 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-3 font-semibold transition">
            View Detailed Insights
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;