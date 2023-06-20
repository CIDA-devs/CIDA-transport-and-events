import React from "react";
import Image from "next/image";
import { ImCalendar } from "react-icons/im";

function carpage() {
  return (
    <div className="bg-gradient-to-r from-[#6B564B] to-[#362922] ">
      <section className="pt-[100px] sm:px-28 px-5 flex lg:flex-row flex-col lg:items-end lg:justify-between max-w-[1800px] mx-auto">
        <div>
          <h1 className="xl:text-[110px] lg:text-[80px] sm:text-[70px] text-[60px] font-extrabold text-white lg:-mb-10 text-form">
            Home Of
          </h1>
          <h1 className="xl:text-[110px] lg:text-[80px] sm:text-[70px] text-[60px] font-extrabold text-white text-form2">
            <span className="text-[#FEC977]">Car</span> rentals
          </h1>
        </div>
        <div className="lg:w-[20%]">
          <p className="text-white/40 xl:text-[15px] lg:text-[12px] text-form3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
            reiciendis quos tempore dolorum exercitationem commodi voluptas
            corrupti porro quia,
          </p>
          <div className="pt-10">
            {" "}
            <h1 className="bg-[#FEC977] w-[120px] font-medium text-xl h-[50px] rounded-md flex items-center justify-center text-form4">
              Open Fleet
            </h1>
          </div>
        </div>
      </section>
      <section className="mt-[50px] max-w-[1800px] mx-auto">
        <div className="flex justify-center lg:px-20">
          <Image
            className=" xl:scale-125 object-cover"
            src="/Screenshot_2023-06-14_002313-removebg-preview.png"
            width={1000}
            height={1000}
            alt=""
          ></Image>
        </div>
      </section>
      <section className="py-28 xl:px-28 lg:px-5 px-10 max-w-[1800px] mx-auto">
        <div className="p-5 rounded-xl  bg-white/20 flex lg:flex-row flex-col justify-center items-center gap-10">
          <div className="text-white">
            <h1 className="text-white/50 text-center">Pick Up Address</h1>
            <p>From: address,hotel,airport</p>
          </div>
          <div className="bg-white/40 lg:h-[50px] lg:w-[2px] w-full h-[2px]"></div>
          <div className="text-white">
            <h1 className="text-white/50 text-center">Drop Off Address</h1>
            <p>Distan,Hourly,Flat Rate</p>
          </div>
          <div className="bg-white/40 lg:h-[50px] lg:w-[2px] w-full h-[2px]"></div>
          <div className="text-white">
            <h1 className="text-white/50 text-center">Pick Up Date</h1>
            <p>April 16,2023</p>
          </div>
          <div className="bg-white/40 lg:h-[50px] lg:w-[2px] w-full h-[2px]"></div>
          <div className="text-white">
            <h1 className="text-white/50 text-center">Pick Up Time</h1>
            <p>12:25am</p>
          </div>
          <div className="bg-white/40 lg:h-[50px] lg:w-[2px] w-full h-[2px]"></div>
          <div className="text-center bg-[#FEC977] p-3 rounded-md">
            <div className="flex justify-center text-3xl">
              <ImCalendar />
            </div>

            <p className="pt-2">Book Now</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default carpage;
