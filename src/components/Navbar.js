import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="  bg-[#fee3c7]">
      <div
        className="
      container 
      flex 
      place-items-center 
      justify-between 
      p-3"
      >
        <Link to="/" className="navbar-logo">
          <h1
            className="
          text-xl 
          font-bold 
          text-[#4d416c]"
          >
            HealtyLife
          </h1>
        </Link>

        <div onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</div>
        <ul className="flex">
          <li
            className="
          mr-5 
          font-medium 
          text-slate-800
          cursor-pointer"
          >
            Home
          </li>
          <li
            className="
          mr-5 
          font-medium 
          text-slate-800
          cursor-pointer"
          >
            Exercises
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
