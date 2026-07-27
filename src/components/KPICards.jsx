import {
  IndianRupee,
  ShoppingCart,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";

import { motion } from "framer-motion";
import { useContext } from "react";

import { DataContext } from "../context/DataContext";


function KPICards() {


  const { kpis } = useContext(DataContext);



  const icons = [
    <IndianRupee size={28} />,
    <ShoppingCart size={28} />,
    <Users size={28} />,
    <TrendingUp size={28} />,
    <Target size={28} />,
  ];



  const backgrounds = [

    "from-blue-700 to-indigo-900",

    "from-emerald-700 to-teal-900",

    "from-purple-700 to-violet-900",

    "from-orange-700 to-amber-900",

    "from-pink-700 to-fuchsia-900",

  ];



  const cards = kpis.cards || [];



  if(cards.length === 0){

    return (

      <div className="bg-white rounded-2xl shadow p-6 text-center">

        <h2 className="text-xl font-semibold text-gray-500">

          Upload dataset to generate KPIs

        </h2>

      </div>

    );

  }




  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">


      {
        cards.slice(0,5).map((card,index)=>(



          <motion.div

            key={card.title}


            whileHover={{

              scale:1.03,

              y:-5

            }}



            transition={{

              duration:0.25

            }}



            className={`bg-gradient-to-r ${
              backgrounds[index % backgrounds.length]
            } rounded-2xl p-6 text-white shadow-xl relative overflow-hidden`}


          >


            <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full blur-3xl"></div>



            <div className="flex justify-between items-start">


              <div>


                <p className="text-sm opacity-90">

                  {card.title}

                </p>



                <h2 className="text-3xl font-bold mt-3">


                  {
                    typeof card.value === "number"

                    ?

                    card.value.toLocaleString()

                    :

                    card.value

                  }


                </h2>



                <p className="text-sm mt-5 text-green-200">

                  AI Generated KPI

                </p>



              </div>




              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">


                {icons[index % icons.length]}


              </div>



            </div>



          </motion.div>


        ))

      }



    </div>

  );

}


export default KPICards;