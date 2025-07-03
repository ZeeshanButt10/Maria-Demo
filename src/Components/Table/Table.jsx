import React, { useEffect, useState } from "react";
import {
  FaBuilding,
  FaDollarSign,
  FaExternalLinkAlt,
  FaSearch,
} from "react-icons/fa";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { SiGoogledocs } from "react-icons/si";
import { CiCalendar, CiWarning } from "react-icons/ci";
import { IoDocument } from "react-icons/io5";

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;
  const [showReportMenu, setShowReportMenu] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="text-white py-3  px-[5vw] md:px-[7vw] lg:px-[10vw] bg-[#042036] min-h-screen">
      <h1 className="text-[#e8f6f2]  text-4xl font-bold font-sans">
        Licitaciones
      </h1>
      <h3 className="text-[#9ca09f] py-3 text-1xl font-sans">
        Licitaciones investigadas
      </h3>

      <div className="flex gap-9 mb-6 items-center">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#1f73d966] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3f7745]"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-[#1f73d966]">
        <table className="table-auto w-full text-sm border border-gray-300 rounded-lg overflow-hidden">
          <thead className="text-xL text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">INSTITUCIÓN</th>
              <th className="px-4 py-2 text-left">ID LICITACIÓN</th>
              <th className="px-4 py-2 text-left">MARCADO </th>
              <th className="px-4 py-2 text-left">OFERTA ADJUDICADA</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 dark:text-gray-400">
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="odd:bg-gray-600 bg-white border-b dark:odd:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 cursor-pointer hover:odd:bg-[#7853] hover:bg-[#7853]"
                onClick={() => setModalItem(item)}
              >
                <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                  {item.id}
                </td>
                <td className="px-4 py-2 text-gray-900 dark:text-gray-300">
                  {item.title}
                </td>
                <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                  {item.userId}
                </td>
                <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                  {item.completed ? "✅ Done" : "⏳ Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <hr className="text-[#053964] mt-4" />
        <p className="text-[#9ca09f] mt-6 text-sm text-left">
          Showing {offset + 1} to{" "}
          {Math.min(offset + itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} items
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

      {/* Modal */}
      {modalItem && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-60 flex items-center justify-center z-50 px-4 ">
          <div className="bg-gray-900 text-white border rounded-2xl w-[90vw] max-w-3xl max-h-[80vh] flex flex-col overflow-y-auto ">
            <div className="flex items-center justify-between bg-gray-800/50 border-transparent rounded-t-2xl px-4 py-7 ">
              <h3 className="text-xl font-bold mb-2">Post #{modalItem.id}</h3>
              <button
                onClick={() => setModalItem(null)}
                className="text-white text-xl hover:text-red-400 text-center"
              >
                &times;
              </button>
            </div>
            
            <div className="overflow-y-auto flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {/* Cell 1 */}
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <p>
                  <strong>Title:</strong> {modalItem.title}
                </p>
              </div>

              {/* Cell 2 */}
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <p>
                  <strong>User ID:</strong> {modalItem.userId}
                </p>
              </div>

              {/* Cell 3 */}
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full text-green-400 border flex items-center justify-center text-2xl bg-[#063a3266] flex-shrink-0">
                    <SiGoogledocs />
                  </div>

                  <div>
                    <h1 className="text-xl">Descripción:</h1>
                    <p className="text-gray-400">
                      Adquisición de Combustibles y Lubricantes, para ser
                      utilizados en la preparación de inicio de la zafra
                      azucarera en el Ingenio Porvenir
                    </p>
                  </div>
                </div>
              </div>

              {/* Cell 4 */}
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <h1 className="text-xl py-3">Información Financiera: </h1>
                <div className="flex-row items-center">
                  <div className="flex items-center gap-3">
                    <div className=" w-12 h-12 flex items-center justify-center text-xl text-green-400  bg-[#063a3266]  rounded-full">
                      <FaDollarSign />
                    </div>
                    <div className="p-3">
                      <p className="text-gray-400">Oferta Adjudicada</p>
                      <h2 className="font-bold text-xl">12,710,403.20 DOP</h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center text-xl text-green-400 bg-[#063a3266]  rounded-full">
                      <FaDollarSign />
                    </div>
                    <div>
                      <p className="text-gray-400">Moneda</p>
                      <h2 className="font-bold text-xl">DOP</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cell 5 */}
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <h1 className="text-xl py-3">Información Institucional: </h1>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center text-xl bg-[#063a3266]  rounded-full">
                    <FaBuilding />
                  </div>
                  <div>
                    <p className="text-gray-400">Institución</p>
                    <h2 className="font-bold text-xl">AVMLL</h2>
                  </div>
                </div>
              </div>
              {/* Cell 6 */}
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <h1 className="text-xl py-3">Referencia del Procedimiento: </h1>
                <p className="text-gray-400">CEA-MAE-PEUR-2025-0001</p>
              </div>
              {/* Cell 7 */}
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <h1 className="text-xl py-3">Información del Documento: </h1>
                <div className="flex">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center text-xl bg-[#063a3266]  rounded-full">
                      <CiCalendar />
                    </div>
                    <div>
                      <p className="text-gray-400">Fecha</p>
                      <h2 className="font-bold">16 de enero de 2025</h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center text-xl bg-[#063a3266]  rounded-full">
                      <IoDocument />
                    </div>
                    <div>
                      <p className="text-gray-400">Tamaño</p>
                      <h2 className="font-bold">199.06 KB</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-between bg-gray-800/50 border-transparent rounded-t-2xl px-3 py-2 ">
              <button
                onClick={() => setModalItem(null)}
                className="text-gray-400 hover:text-red-400 text-center  px-3 py-1 rounded-xl cursor-pointer bg-gray-800"
              >
                Cerrar
              </button>
              <div className="px-3 flex gap-2">
                <button
                  onClick={() => setShowReportMenu(true)}
                  className="text-yellow-400 flex items-center gap-2 bg-gray-800 border px-3 py-1 rounded-xl"
                >
                  <CiWarning /> Reportar
                </button>
                <button
                  onClick={() => setModalItem(null)}
                  className="text-gray-800  text-center flex items-center gap-2 px-3 py-1 rounded-xl cursor-pointer bg-green-400"
                >
                  <FaExternalLinkAlt /> Ver Documento
                </button>
              </div>
            </div>
            {showReportMenu && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
                <div className="bg-gray-800 text-white p-6 rounded-xl w-[90%] max-w-md relative">
                  <button
                    onClick={() => setShowReportMenu(false)}
                    className="absolute top-2 right-2 text-xl hover:text-red-400"
                  >
                    &times;
                  </button>
                  <h2 className="text-2xl font-bold mb-4">
                    Reportar Licitación
                  </h2>
                  <textarea
                    placeholder="Escribe los detalles del reporte..."
                    className="w-full p-2 rounded bg-gray-900 text-white border"
                    rows="4"
                  ></textarea>
                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      onClick={() => setShowReportMenu(false)}
                      className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => {
                        setShowReportMenu(false);
                        setModalItem(null);
                        alert("Reporte enviado");
                      }}
                      className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
