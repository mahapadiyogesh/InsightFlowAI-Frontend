import { useContext, useState } from "react";

import { DataContext } from "../context/DataContext";

import { applyFilters } from "../utils/applyFilters";


function SmartFilter() {

  const {
    filters,
    excelData,
    setFilteredData,
  } = useContext(DataContext);


  const [selectedFilters, setSelectedFilters] = useState({});


  const handleChange = (column, value) => {

    setSelectedFilters({

      ...selectedFilters,

      [column]: value,

    });

  };


  const handleApply = () => {

    const result = applyFilters(
      excelData,
      selectedFilters
    );

    setFilteredData(result);

  };


  const handleReset = () => {

    setSelectedFilters({});

    setFilteredData(excelData);

  };


  return (

    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">


      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Smart Filters
      </h2>


      <div className="space-y-5">


        {
          filters.length === 0 ? (

            <p className="text-gray-500">
              Upload dataset to generate filters.
            </p>

          ) : (


            filters.map((filter) => (

              <div key={filter.column}>


                <label className="block text-sm font-medium mb-2">

                  {filter.column}

                </label>



                <select

                  className="w-full border rounded-xl px-4 py-3"

                  value={
                    selectedFilters[filter.column] || "All"
                  }

                  onChange={(e)=>
                    handleChange(
                      filter.column,
                      e.target.value
                    )
                  }

                >

                  <option value="All">
                    All
                  </option>


                  {
                    filter.type === "select" &&

                    filter.options.map((option)=>(

                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>

                    ))
                  }


                </select>


              </div>


            ))

          )
        }



        <button

          onClick={handleApply}

          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl"

        >

          Apply Filters

        </button>



        <button

          onClick={handleReset}

          className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 rounded-xl"

        >

          Reset Filters

        </button>


      </div>


    </div>

  );

}


export default SmartFilter;