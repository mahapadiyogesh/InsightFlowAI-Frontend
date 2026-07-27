import { useContext, useMemo, useState } from "react";
import { Search, Download, Maximize2 } from "lucide-react";
import { DataContext } from "../context/DataContext";

function DataTable() {

  const { filteredData } = useContext(DataContext);

  const [search, setSearch] = useState("");


  const searchedData = useMemo(() => {

    if (!filteredData || filteredData.length === 0) {
      return [];
    }


    return filteredData.filter((row) =>

      Object.values(row).some((value) =>
        String(value)
          .toLowerCase()
          .includes(search.toLowerCase())
      )

    );

  }, [filteredData, search]);



  const headers =
    searchedData.length > 0
      ? Object.keys(searchedData[0])
      : [];



  return (

    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">


      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-5 border-b">


        <h2 className="text-2xl font-bold text-slate-800">

          Data Preview

          <span className="text-base font-normal text-gray-500 ml-2">
            (Top 10 Records)
          </span>

        </h2>



        <div className="flex items-center gap-3">


          <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72">


            <Search size={18} className="text-gray-500" />


            <input

              type="text"

              placeholder="Search in table..."

              value={search}

              onChange={(e)=>setSearch(e.target.value)}

              className="bg-transparent outline-none ml-2 w-full"

            />


          </div>



          <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200">

            <Download size={18}/>

          </button>



          <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200">

            <Maximize2 size={18}/>

          </button>


        </div>


      </div>





      {/* Empty State */}


      {
        searchedData.length === 0 ? (


          <div className="text-center py-24">


            <h2 className="text-2xl font-bold text-slate-700">

              No Dataset Uploaded

            </h2>


            <p className="text-gray-500 mt-3">

              Upload an Excel file from Upload page.

            </p>


          </div>



        ) : (



          <>


            {/* Table */}


            <div className="overflow-auto max-h-[450px]">


              <table className="min-w-full border-collapse">


                <thead className="sticky top-0 bg-slate-900 text-white">


                  <tr>


                    {
                      headers.map((header)=>(


                        <th

                          key={header}

                          className="px-5 py-4 text-left whitespace-nowrap border-b"

                        >

                          {header}

                        </th>


                      ))
                    }


                  </tr>


                </thead>




                <tbody>


                  {
                    searchedData.slice(0,10).map((row,index)=>(


                      <tr

                        key={index}

                        className="hover:bg-cyan-50 border-b transition"

                      >


                        {
                          headers.map((header)=>(


                            <td

                              key={header}

                              className="px-5 py-3 whitespace-nowrap"

                            >

                              {row[header]}

                            </td>


                          ))
                        }


                      </tr>


                    ))
                  }


                </tbody>


              </table>


            </div>





            {/* Footer */}


            <div className="flex justify-between items-center p-5 border-t bg-gray-50">


              <p className="text-gray-600">


                Showing{" "}


                <strong>

                  {Math.min(searchedData.length,10)}

                </strong>


                {" "}of{" "}


                <strong>

                  {searchedData.length}

                </strong>


                {" "}records


              </p>


            </div>


          </>


        )
      }



    </div>

  );

}


export default DataTable;