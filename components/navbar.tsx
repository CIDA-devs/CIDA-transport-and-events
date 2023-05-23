import React from "react";

function Navbar() {
  return (
    <div className="bg-black/80">
      <div className="flex justify-between items-center max-w-7xl mx-auto h-[100px] px-10">
        {/* logo */}
        <div>
          <h1 className="text-blue-600 md:text-xl text-sm">
            CIDA Transport and Events
          </h1>
        </div>
        {/* services */}
        <div className="flex gap-5 text-white md:text-xl text-sm">
          <h1>Explore</h1>
          <h1>Travel</h1>
          <h1>Food</h1>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
