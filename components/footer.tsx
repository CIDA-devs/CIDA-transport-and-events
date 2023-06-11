"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });
  return (
    <div>
      <div className="bg-[#18181C] text-white mt-12 font-medium pb-10">
        <section>
          <div className="flex justify-center pt-14 md:text-4xl text-[30px] md:gap-5 gap-2">
            <h1 ref={ref} className={` ${inView ? "text-form6" : ""}`}>
              Affordable.
            </h1>
            <h1 ref={ref} className={` ${inView ? "text-form5" : ""}`}>
              Reliable.
            </h1>
          </div>
          <div className="text-center pt-3 font-light px-5">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              nesciunt magnam.
            </h1>
          </div>
        </section>
        <section>
          <div className="flex md:flex-row flex-col justify-center mt-5 gap-5 place-items-center">
            {" "}
            <h1 className="border w-[120px] h-[50px]  flex justify-center rounded-[20px] items-center text-white md:text-[17px] text-xs hover:bg-[#E6E1FF] hover:text-black cursor-pointer">
              Plan
            </h1>
            <h1 className="border w-[120px] h-[50px]  flex justify-center rounded-[20px] items-center text-black md:text-[17px] text-xs hover:bg-black bg-[#E6E1FF] hover:text-white cursor-pointer">
              Rent
            </h1>
          </div>
        </section>
        <section className="text-center mt-10">
          <div className="text-3xl font-semibold">Contact Us</div>
          <h1 className="font-light pt-2">+233 394 7654</h1>
          <h1 className="font-light">james@gmail.com</h1>
        </section>
      </div>
    </div>
  );
}

export default Footer;
