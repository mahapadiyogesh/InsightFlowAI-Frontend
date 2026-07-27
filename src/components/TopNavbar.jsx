import { Bell, Search, UserCircle2 } from "lucide-react";

function TopNavbar() {
  return (
    <header className="h-20 bg-white shadow-sm border-b flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome to Vision Analytics 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72">
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>

        <button className="relative p-2 rounded-full hover:bg-slate-100">
          <Bell size={22} />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <UserCircle2 size={42} className="text-cyan-600" />

          <div>
            <h4 className="font-semibold">Yogesh</h4>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default TopNavbar;