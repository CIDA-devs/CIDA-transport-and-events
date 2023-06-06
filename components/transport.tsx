import React from "react";
import Image from "next/image";

function transport() {
  return (
    <div className="bg-gradient-to-r from-[#6B564B] to-[#362922]">
      {" "}
      <div className=" flex max-w-[1800px] mx-auto lg:flex-row flex-col justify-between gap-10 items-center px-20">
        <div>
          <h1 className="text-white lg:text-[40px] text-[30px] xl:text-[60px] 2xl:text-[74px] pt-10 lg:pt-0 font-bold -mb-12 text-center lg:text-left">
            Rent Your Next Car from Us
          </h1>
          <div className="flex justify-center lg:justify-start">
            <h1 className=" font-semibold shadow-md cursor-pointer hover:bg-white hover:text-black  text-black mt-14  w-[130px] h-[50px] flex justify-center items-center bg-[#b8abf9]">
              RENT NOW
            </h1>
          </div>
        </div>
        <div>
          <Image
            className="xl:w-[500px] xl:h-[360px] w-[480px] h-[250px] -mt-[60px] lg:-mt-0 pb-5"
            src="/pexels-mike-bird-112460-removebg-preview.png"
            width={500}
            height={500}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default transport;
