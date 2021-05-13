import React from "react";

function Navbar() {
  return (
    <div className="px-10 w-full flex flex-col justify-center items-center">
      <img src="" alt="JOY" />
      <div className="flex space-x-10 w-full">
        <p className="w-1/4 text-center">Home</p>
        <p className="w-1/4 text-center">Shop</p>
        <p className="w-1/4 text-center">Service</p>
        <p className="w-1/4 text-center">Contact</p>
      </div>
    </div>
  );
}

export default Navbar;
