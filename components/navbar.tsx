import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="flex justify-between items-center max-w-[1800px] mx-auto h-[80px] px-10">
        {/* logo */}
        <div>
          <Link href="/" className="text-white font-semibold md:text-xl text-sm">
            CIDA Events LTD
          </Link>
        </div>
        {/* services */}
        <div className="md:flex hidden gap-5 text-black md:text-xl text-sm">
          {/* <Link href="/about"> */}
            <Link href="/about" className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-white md:text-[18px] text-sm hover:bg-[#E6E1FF] hover:text-black font-semibold cursor-pointer">
              About
            </Link>
          {/* </Link> */}
          <Link href="#" className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-white md:text-[18px] text-sm hover:bg-[#E6E1FF] hover:text-black font-semibold cursor-pointer">
            Travel
          </Link>
          <Link href="#" className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-white md:text-[18px] text-sm hover:bg-[#E6E1FF] hover:text-black font-semibold cursor-pointer">
            Food
          </Link>
          <Link href="#" className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-white md:text-[18px] text-sm hover:bg-[#E6E1FF] hover:text-black font-semibold cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
