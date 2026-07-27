import {
  IndianRupee,
  ShoppingCart,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

function KPICards() {
  const cards = [
    {
      title: "Total Revenue",
      value: "₹12,45,600",
      change: "▲ 12.5% vs last month",
      icon: <IndianRupee size={28} />,
      bg: "from-blue-700 to-indigo-900",
    },
    {
      title: "Total Orders",
      value: "1,250",
      change: "▲ 8.3% vs last month",
      icon: <ShoppingCart size={28} />,
      bg: "from-emerald-700 to-teal-900",
    },
    {
      title: "Customers",
      value: "980",
      change: "▲ 10.7% vs last month",
      icon: <Users size={28} />,
      bg: "from-purple-700 to-violet-900",
    },
    {
      title: "Profit",
      value: "₹2,45,300",
      change: "▲ 15.2% vs last month",
      icon: <TrendingUp size={28} />,
      bg: "from-orange-700 to-amber-900",
    },
    {
      title: "Growth Rate",
      value: "18.6%",
      change: "▲ 3.4% improvement",
      icon: <Target size={28} />,
      bg: "from-pink-700 to-fuchsia-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          whileHover={{
            scale: 1.03,
            y: -5,
          }}
          transition={{ duration: 0.25 }}
          className={`bg-gradient-to-r ${card.bg} rounded-2xl p-6 text-white shadow-xl relative overflow-hidden`}
        >
          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full blur-3xl"></div>

          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-90">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {card.value}
              </h2>

              <p className="text-sm mt-5 text-green-200">
                {card.change}
              </p>
            </div>

            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              {card.icon}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default KPICards;