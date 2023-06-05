import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-[#b8abf9]">
      <div className="flex justify-between items-center max-w-[1800px] mx-auto h-[80px] px-10">
        {/* logo */}
        <div>
          <h1 className="text-black font-semibold md:text-xl text-sm">
            CIDA Events LTD
          </h1>
        </div>
        {/* services */}
        <div className="md:flex hidden gap-5 text-black md:text-xl text-sm">
          <Link href="/about">
            <h1 className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-black md:text-[18px] text-sm hover:bg-white font-semibold cursor-pointer">
              About
            </h1>
          </Link>
          <h1 className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-black md:text-[18px] text-sm hover:bg-white font-semibold cursor-pointer">
            Travel
          </h1>
          <h1 className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-black md:text-[18px] text-sm hover:bg-white font-semibold cursor-pointer">
            Food
          </h1>
          <h1 className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-black md:text-[18px] text-sm hover:bg-white font-semibold cursor-pointer">
            Contact
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
