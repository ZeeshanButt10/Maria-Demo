import React from "react";

const Footer = () => {
  // Smooth Scroll Function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg bg-[#475e8a66]">
      <div className="container mx-auto text-left">
        <h2 className="text-xl font-semibold text-[#11ef8066]">MARIA BETA</h2>

        {/* Navigation Links  */}

        <nav className="flex flex-wrap justify-left space-x-4 text-[#a6aeaa66] sm:space-x-6 mt-4">
          <h2>Explora las últimas licitaciones gubernamentales con facilidad.</h2><br />
        </nav>
          <nav className="flex flex-wrap justify-left space-x-2 text-[#a6aeaa66] ">
          <h2> Mantente informado y compara precios al instante.</h2>
        </nav>

         {/* Copyright text  */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 MARIA. All rights reserved.

</p>
      </div>
    </footer>
  );
};

export default Footer;
