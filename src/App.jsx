import "./index.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";
import Data from "./Components/Data/Data";
import Start from "./Components/Start/Start";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";

//creat a layout file for layout related stuff e.g footer, header and main area, sidebar, create a Route.js file

function App() {

  //always creat the array for repated things and use map

  const routes = [{path: '', element: Start}]

  return (
    <>
      <div className="bg-[#042036]">
        <div className="relative pt-20  border-[#053964]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/watch" element={<Table />} />
            <Route path="/data" element={<Data />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
