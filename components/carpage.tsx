import React from "react";
import Image from "next/image";
import { ImCalendar } from "react-icons/im";

function carpage() {
  return (
    <div className="bg-gradient-to-r from-[#6B564B] to-[#362922] ">
      <section className="pt-[100px] px-28 flex items-end justify-between max-w-[1800px] mx-auto">
        <div>
          <h1 className="text-[110px] font-extrabold text-white -mb-10 text-form">
            Home Of
          </h1>
          <h1 className="text-[110px] font-extrabold text-white text-form2">
            <span className="text-[#FEC977]">Car</span> rentals
          </h1>
        </div>
        <div className="w-[20%]">
          <p className="text-white/40 text-form3">
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
        <div className="flex justify-center">
          <Image
            className=" scale-125"
            src="/Screenshot_2023-06-14_002313-removebg-preview.png"
            width={1000}
            height={1000}
            alt=""
          ></Image>
        </div>
      </section>
      <section className="py-28 px-28 max-w-[1800px] mx-auto">
        <div className="p-5 rounded-xl  bg-white/20 flex justify-center items-center gap-10">
          <div className="text-white">
            <h1 className="text-white/50">Pick Up Address</h1>
            <p>From: address,hotel,airport</p>
          </div>
          <div className="bg-white/40 h-[50px] w-[2px]"></div>
          <div className="text-white">
            <h1 className="text-white/50">Drop Off Address</h1>
            <p>Distan,Hourly,Flat Rate</p>
          </div>
          <div className="bg-white/40 h-[50px] w-[2px]"></div>
          <div className="text-white">
            <h1 className="text-white/50">Pick Up Date</h1>
            <p>April 16,2023</p>
          </div>
          <div className="bg-white/40 h-[50px] w-[2px]"></div>
          <div className="text-white">
            <h1 className="text-white/50">Pick Up Time</h1>
            <p>12:25am</p>
          </div>
          <div className="bg-white/40 h-[50px] w-[2px]"></div>
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
