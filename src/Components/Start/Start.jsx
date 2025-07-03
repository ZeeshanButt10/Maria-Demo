import React from "react";
import { FaDollarSign, FaEye, FaUserFriends } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { Link } from "react-router-dom";
import ToggleTabs from "../ToggleTabs/ToggleTabs";
import { FiShield } from "react-icons/fi";

const Start = () => {
  return (
    <div className="bg-[#13314a33] min-h-screen text-white py-6 px-[5vw] md:px-[7vw] lg:px-[10vw]">
      <div className=" bg-gradient-to-br from-[#1e875766] to-[rgba(1,26,22,0.4)] py-10 border-green-950 rounded-2xl px-[5vw]">
        <div className="flex items-center gap-2 mx-auto md:text-xl py-1 bg-[#2b5f1f60] text-[#4ad689e5] border rounded-2xl w-full max-w-[430px] px-3 ">
        <FiShield /> Inteligencia Artificial para la Transparencia 
        </div>
        <h1 className="text-7xl text-center bg-gradient-to-br from-[#37e80fe5] to-[#02221d66] text-transparent py-4 font-sans font-bold bg-clip-text">
          MARIA
        </h1>

        <p className="px-4 py-5 text-gray-300 text-xl font-mont text-center">
          En MARIA creemos que la República Dominicana merece transparencia y
          conocer en que se utilizan los recursos pagados por los ciudadanos.
        </p>

        <p className="px-4 py-5 text-gray-300 text-xl">
          Es por esto que hemos creado una inteligencia artificial que se
          encargara de observar, auditar y reportar todo incidente o acto
          ilícito que se quiera realizar a través de las licitaciones de
          instituciones del Estado, en esta pagina encontraran las licitaciones
          y su niveles de riesgo luego de ser analizadas por MARIA, también
          podrán observar las licitaciones nuevas y su costo para el Estado
          Dominicano.
        </p>

        <div className="flex justify-center gap-3">
          <Link to={"/data"}>
            <button className="bg-green-400 text-[#1d1d29fe] border p-4 rounded-2xl px-4 py-2 flex items-center gap-7 font-bold cursor-pointer">
              {<FaEye />} Ver Licitaciones
            </button>
          </Link>
          <Link to={"/watch"}>
            <button className="text-green-400 bg-[#063a3266] border p-4 rounded-2xl px-4 py-2 flex items-center shadow-green-100 gap-7 font-bold cursor-pointer">
              {<SiGoogledocs />} Descargar Reportes
            </button>
          </Link>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-center text-4xl font-bold">Impacto de MARIA</h1>
        <p className="text-gray-300 text-xl py-2 text-center">
          Transparencia que genera resultados medibles
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 px-[5vw] md:px-[7vw] lg:px-[10vw]">
        <div className="bg-[#26895b66] py-5 border rounded-2xl px-4">
          <div className="flex justify-center">
            <div className=" flex justify-center bg-[#74a57866] py-3 text-[#09e473]  border rounded-full items-center w-17 h-17 text-4xl ">
              {<FaArrowTrendUp />}
            </div>
          </div>
          <h2 className="text-3xl text-[#09e473] text-center py-3 font-sans">
            Gastos del gobierno
          </h2>
          <p className="text-6xl text-[#09e473] py-5 font-bold text-center">
            $63.72B
          </p>
          <p className="py-4 bg-blue-950/50 text-gray-400 rounded-2xl px-4">
            Uso del presupuesto público por el gobierno, compuesto por todas las
            licitaciones que han sido adjudicadas durante el último año.
          </p>
        </div>
        <div className="bg-[#063a3266] py-5 border rounded-2xl px-4">
          <div className="flex justify-center">
            <div className="flex justify-center py-3 bg-[#274f2a66] text-4xl text-[#14a9ca66] border rounded-full items-center w-17 h-17 ">
              {<FaDollarSign />}
            </div>
          </div>
          <h2 className="text-3xl text-center py-3 text-[#14a9ca66]">
            Costo por ciudadano
          </h2>
          <p className="text-6xl text-[#14a9ca66] font-bold py-5 text-center">
            $10.62K
          </p>
          <p className="py-4 bg-blue-950/50 rounded-2xl text-gray-400 px-4">
            El costo por ciudadano se realiza tomando en cuenta el dato de los 6
            millones de ciudadanos dominicanos adultos según el censo
          </p>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-center text-4xl font-bold">
          Tabla de gastos por institución
        </h1>
        <p className="text-gray-300 text-xl py-2 text-center">
          Seguimiento de procesos en instituciones
        </p>
      </div>

      <div>
        <div className=" bg-gradient-to-br from-[#042d1b66] to-[#011a1666] md:px-9 py-10 border-green-950 rounded-2xl">
          {<ToggleTabs />}
        </div>
      </div>

      <div className="pt-20">
        <h1 className="text-center text-4xl font-bold py-4 text-gray-200">
          Características de MARIA
        </h1>
        <h3 className="text-gray-300 text-center text-xl">
          Tecnología avanzada al servicio de la transparencia
        </h3>
      </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 py-5 ">
          <div className="flex-1 min-w-[250px] bg-[#063a3266] py-5 border border-green-900 hover:border-green-400 rounded-2xl px-4 flex flex-col">
            <div className="flex justify-center">
              <div className="flex justify-center py-3 bg-[#274f2a66] text-3xl text-green-400  rounded-full items-center w-15 h-15 ">
                {<FaEye />}
              </div>
            </div>
            <h2 className="text-xl font-bold text-center py-3 text-gray-300">
              Monitoreo Continuo
            </h2>
            <p className="py-4 rounded-2xl text-gray-400 px-4 text-center">
              Vigilancia 24/7 de todas las licitaciones públicas para detectar
              irregularidades en tiempo real.
            </p>
          </div>
          <div className="flex-1 min-w-[250px]  bg-[#063a3266] py-5 border border-green-900 hover:border-green-400 rounded-2xl px-4  flex flex-col">
            <div className="flex justify-center">
              <div className="flex justify-center py-3 bg-[#274f2a66] text-3xl text-green-400  rounded-full items-center w-15 h-15 ">
                {<SiGoogledocs />}
              </div>
            </div>
            <h2 className="text-xl font-bold text-center py-3 text-gray-300">
              Reportes Detallados
            </h2>
            <p className="py-4 rounded-2xl text-gray-400 px-4 text-center">
              Informes completos y transparentes sobre cada proceso de
              licitación
            </p>
          </div>
          <div className="flex-1 min-w-[250px] bg-[#063a3266] py-5 border border-green-900 hover:border-green-400 rounded-2xl px-4  flex flex-col">
            <div className="flex justify-center">
              <div className="flex justify-center py-3 bg-[#274f2a66] text-3xl text-green-400 rounded-full items-center w-15 h-15 ">
                {<FaUserFriends />}
              </div>
            </div>
            <h2 className="text-xl font-bold text-center py-3 text-gray-300">
              Acceso Ciudadano
            </h2>
            <p className="py-4 rounded-2xl text-gray-400 px-4 text-center">
              Plataforma accesible para que todos los ciudadanos puedan
              consultar y descargar información pública.
            </p>
          </div>
        </div>

       <div className="flex-1 min-w-[250px] bg-gradient-to-r from-[#274f2a66] via-[#063a3266] to-[#274f2a66]  py-20 px-4 rounded-2xl   flex flex-col">
            
            <h2 className="text-4xl font-bold text-center py-3 text-gray-300">
          Únete a la Transparencia
            </h2>
            <p className="py-4 rounded-2xl text-gray-400 px-4 text-center text-xl">
              Ayúdanos a construir una República Dominicana más transparente. Accede a los datos, reportes y análisis de MARIA.
            </p>
            <div className="flex justify-center gap-3">
          <Link to={"/data"}>
            <button className="bg-green-400 text-[#1d1d29fe] border p-4 rounded-xl px-4 py-2 flex items-center gap-7 cursor-pointer">
               Acceder a la Plataforma
            </button>
          </Link>
          <Link to={"/contact"}>
            <button className="text-green-400 bg-[#063a3266] p-4 rounded-xl px-4 py-2 flex items-center shadow-green-100 gap-7 hover:text-white  cursor-pointer">
             Contactar Equipo
            </button>
          </Link>
        </div>
          </div>  

      </div>
  );
};

export default Start;
