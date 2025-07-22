import React from "react";
import mylogo from "../../assets/mylogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center  ">
      <Link to="/">
        <img src={mylogo} alt="logo" className="md:w-40 md:h-40 w-25 h-25 " />
      </Link>
      <h1 className="text-[#BBBCBD] font-serif text-xl  md:text-6xl lg:text-8xl font-bold mx-auto animation ">
        Eng Khalil Farah
      </h1>
    </div>
  );
}
