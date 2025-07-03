import { useEffect, useState } from "react";
import axios from "axios";

export default function DataTable({ activeTab }) {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const allTasks = res.data;

        const filtered = activeTab === "mayor"
          ? allTasks.filter(task => task.completed)
          : allTasks.filter(task => !task.completed);

        setFilteredData(filtered);
        setVisibleCount(10); // Reset visible count on tab change
      })
      .catch((err) => console.error(err));
      //Read about dependency array
  }, [activeTab]);

  const handleLoadMore = () => {
    //read about state batching and when we use callback in setState function
    setVisibleCount( prev => prev + 10);
  };

  return (
    <div className="mt-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 px-8">
        {filteredData.slice(0, visibleCount).map((task) => (
<div
  key={task.id}
  className={`border border-gray-600 p-4 rounded-lg flex gap-5 
    ${activeTab === "mayor" ? "bg-[#1e875766] text-white" : "bg-[#c21c1c45] text-white"}`}
>            <p className={`font-bold text-center w-10 h-10 py-1 border rounded-full text-xl 
      ${activeTab === "mayor" ? "bg-[#52805566] text-green-400" : "bg-[#c21c1c45] text-red-400"}`}
 >{task.id}</p>
            <p className="mt-2 w-50 text-transform: uppercase "> {task.title.slice(0, 15)}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded-lg"
          >
            Cargar 10 más
          </button>
        </div>
      )}
    </div>
  );
}
