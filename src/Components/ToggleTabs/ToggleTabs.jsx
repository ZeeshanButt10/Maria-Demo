import { useState } from "react";
import DataTable from "../DataTable/Datatable";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

export default function ToggleTabs() {
  const [activeTab, setActiveTab] = useState("mayor");

  return (
    <div className="flex flex-col gap-4">
                
    {/* <div className="flex items-center"> */}
         <div className="flex  items-center justify-between">            
      <p className="px-4 py-5 text-gray-300 text-xl font-bold ">Tabla de gastos por institución</p>

      {/* Toggle Buttons */}
      <div className="bg-gray-800 relative flex justify-between rounded-lg p-0.5 w-max">
        
        <div
          className={`bg-green-500 absolute top-0.5 bottom-0.5 w-[calc(50%-0.125rem)] rounded-md transition-all duration-300 ease-out ${
            activeTab === "mayor" ? "left-0.5" : "left-[calc(50%+0.125rem)]"
          }`}
        ></div>

        <button
          className={`relative cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ease-out ${
            activeTab === "mayor" ? "text-gray-700" : "text-gray-300"
          }`}
          onClick={() => setActiveTab("mayor")}
        >
          Mayor gasto
        </button>

        <button
          className={`relative cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ease-out ${
            activeTab === "menor" ? "text-gray-700" : "text-gray-300"
          }`}
          onClick={() => setActiveTab("menor")}
        >
          Menor gasto
        </button>
        </div>
        {/* </div> */}
      </div>
                          <hr className="w-full text-[#053964] mt-4 " />


      {/* Active Tab Heading */}
      <h1 className="text-2xl font-bold ">
        {activeTab === "mayor" ? <div className="flex items-center gap-2 text-green-400"><FaArrowTrendUp/>Mayor gasto</div> :<div className="flex items-center gap-2 text-red-400 "><FaArrowTrendDown/> Menor gasto</div>}
      </h1>

      {/* Data Table */}
      <DataTable activeTab={activeTab} />
    </div>
  );
}
