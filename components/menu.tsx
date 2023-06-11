import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";

interface Props {
  showMenu: () => void;
  active: boolean;
}

function Menu({ showMenu, active }: Props) {
  return (
    <div>
      <div
        className={
          active
            ? "lg:hidden flex-col flex fixed inset-0 justify-center left-1/4 bg-[#7F7ADE]  gap-8 z-50 text-white items-center text-form5"
            : "hidden"
        }
      >
        <AiOutlineCloseCircle className="text-5xl" onClick={showMenu} />
        <Link href="/about">
          <div>
            <h1
              className="cursor-pointer hover:underline text-3xl"
              onClick={showMenu}
            >
              About Us
            </h1>
          </div>
        </Link>
        <Link href="about#services">
          <div>
            <h1
              className="cursor-pointer hover:underline text-4xl"
              onClick={showMenu}
            >
              Travel
            </h1>
          </div>
        </Link>
        <Link href="#contact">
          <div>
            <h1
              className="cursor-pointer hover:underline text-3xl"
              onClick={showMenu}
            >
              Food
            </h1>
          </div>
        </Link>
        <Link href="#contact">
          <div>
            <h1
              className="cursor-pointer hover:underline text-3xl"
              onClick={showMenu}
            >
              Contact
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
