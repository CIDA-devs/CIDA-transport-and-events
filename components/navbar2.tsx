"use client";

import React, { useState } from "react";
import Link from "next/link";
import Menu from "../components/menu";
import { HiBars3BottomRight } from "react-icons/hi2";

function Navbar() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="bg-black fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-[1800px] mx-auto h-[80px] px-10">
        {/* logo */}
        <Link href="/">
          <div>
            <h1 className="text-white font-semibold md:text-xl text-sm">
              CIDA Events LTD
            </h1>
          </div>
        </Link>

        {/* services */}
        <div>
          <div className="absolute right-10 lg:hidden text-white top-6">
            <HiBars3BottomRight
              className="text-4xl font-bold"
              onClick={showMenu}
            />
          </div>
          <div className="lg:flex hidden gap-5 text-black md:text-xl text-sm">
            <Link href="/about">
              <h1 className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-white md:text-[18px] text-sm hover:bg-[#E6E1FF] hover:text-black font-semibold cursor-pointer">
                About
              </h1>
            </Link>
          
          <Link href="/event">
          <h1 className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-white md:text-[18px] text-sm hover:bg-[#E6E1FF] hover:text-black font-semibold cursor-pointer">
              Event
            </h1>
            </Link>
           <Link href="/cars">
           <h1 className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-white md:text-[18px] text-sm hover:bg-[#E6E1FF] hover:text-black font-semibold cursor-pointer">
              Rent
            </h1>
           </Link>
           <Link href="/contact">
           <h1 className="border w-[120px] h-[40px] flex justify-center rounded-[20px] items-center text-white md:text-[18px] text-sm hover:bg-[#E6E1FF] hover:text-black font-semibold cursor-pointer">
              Contact
            </h1>
           </Link>
          </div>
          <Menu showMenu={showMenu} active={active} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
