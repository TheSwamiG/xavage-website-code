import React from "react";
import Logo from "../images/Logo.png";

function Navbar() {
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <div className="">
        <img className="inline" src={Logo} height={40} width={40} />
        <h1 className="width-full text-3xl font-bold text-white] inline-table px-1">
          AVAGE
        </h1>
      </div>
      <ul className="flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Sponsers</li>
        <button className="bg-[#089dc2] width-[150px] rounded-3xl font-medium  px-6 py-3">
          Register
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
