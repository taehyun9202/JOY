import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-10 mb-6 w-full flex flex-col justify-center items-center sm:px-16 md:px-28 lg:px-40">
      <img src="" alt="JOY" />
      <div className="flex w-full">
        <Link
          to="/"
          className="w-1/4 text-center font-semibold cursor-pointer border-r-2 border-text"
        >
          <p>Home</p>
        </Link>
        <Link
          to="/shop"
          className="w-1/4 text-center font-semibold cursor-pointer border-r-2 border-text"
        >
          <p>Shop</p>
        </Link>
        <Link
          to="/service"
          className="w-1/4 text-center font-semibold cursor-pointer border-r-2 border-text"
        >
          <p>Service</p>
        </Link>
        <Link
          to="/contact"
          className="w-1/4 text-center font-semibold cursor-pointer"
        >
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
