import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCompleted, setFilterCompleted] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(25);

  useEffect(() => {
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerPage(25);  // lg and above
    } else if (width >= 640) {
      setItemsPerPage(18);  // sm to md
    } else {
      setItemsPerPage(15);  // below sm
    }
  };

  updateItemsPerPage(); // Initial check
  window.addEventListener('resize', updateItemsPerPage);

  return () => window.removeEventListener('resize', updateItemsPerPage);
}, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterCompleted === "all" ||
      (filterCompleted === "completed" && item.completed) ||
      (filterCompleted === "pending" && !item.completed);
    return matchesSearch && matchesFilter;
  });

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="text-white py-3 px-[5vw] md:px-[7vw] lg:px-[10vw] bg-[#042036] min-h-screen">
      <h1 className="text-[#e8f6f2] text-4xl font-sans font-bold">Licitaciones completadas</h1>
      <h3 className="text-[#9ca09f] py-4 text-xl font-sans">Filtrado de licitaciones</h3>

      <div className="relative flex-wrap flex py-5 px-3 gap-4 mb-6 items-center  bg-gray-800 flex-col sm:flex-row rounded-2xl">
        <div className="relative w-full max-w-3xl">
          <input
            type="text"
            placeholder="Buscar por ID del instituto o nombre del instituto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#1f73d966] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3f7745] bg-gray-900"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <select
          className="px-4 py-2 flex rounded-xl bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#339e81]"
          value={filterCompleted}
          onChange={(e) => setFilterCompleted(e.target.value)}
        >
          <option value="all">Últimos 7 dias</option>
          <option value="completed">Últimos 15 dias</option>
          <option value="pending">Último mes</option>
          <option value="completed">Últimos 6 meses</option>
          <option value="pending">Últimos 12 meses</option>
        </select>
        <div>
          <button className="px-4 py-2 rounded bg-[#43512944] text-white focus:outline-none focus:ring-2 focus:ring-[#339e81]">Restablecer</button>
        </div>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {currentItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setModalItem(item)}
            className="border border-gray-600 p-3 bg-[#042b4b] rounded-2xl transform duration-300 hover:-translate-y-2 cursor-pointer shadow-md h-full"
          >
            <p className="font-bold truncate text-gray-300">#{item.id}Noob</p>
            <p className="text-xl py-3 truncate text-green-400 font-bold font-sans underline underline-offset-8">{item.title}</p>
            <p className="text-xs mt-1 font-bold text-green-400 ">{item.completed ? "✅ Completed" : "⏳ Pending"}</p>
          </div>
        ))}
      </div>

      
      <div>
      <hr className="bg-[#053964] mt-4"/>
         <p className="text-[#9ca09f] mt-6 text-sm text-left">
        Showing {offset + 1} to {Math.min(offset + itemsPerPage, filteredData.length)} of {filteredData.length} items
    

      <div className="flex  justify-end">
            <ReactPaginate
              previousLabel={"← Prev"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="flex gap-2 flex-wrap justify-center"
              pageClassName="rounded bg-[#053964] hover:bg-[#339e81]"
              activeClassName="!bg-[#339e81] text-white"
              pageLinkClassName="px-3 py-1 block rounded cursor-pointer"
              previousClassName="px-3 py-1"
              nextClassName="px-3 py-1"
              breakLabel={null}
              marginPagesDisplayed={0}
              pageRangeDisplayed={5}
            />
          </div>
  </p>
        </div>

      {modalItem && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">Post #{modalItem.id}</h3>
            <p><strong>Title:</strong> {modalItem.title}</p>
            <p className="mt-2"><strong>User ID:</strong> {modalItem.userId}</p>
            <p className="mt-2"><strong>Status:</strong> {modalItem.completed ? 'Completed' : 'Pending'}</p>
            <button
              className="mt-4 px-4 py-2 bg-[#339e81] text-white rounded hover:bg-[#117441]"
              onClick={() => setModalItem(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

