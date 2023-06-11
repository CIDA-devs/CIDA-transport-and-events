import React from "react";
import Image from "next/image";

function Fleet() {
  return (
    <div className="bg-gradient-to-r from-[#362922] to-[#6B564B] mt-10 rounded-3xl lg:mx-10 mx-5 pb-10">
      {" "}
      <div className="max-w-[1800px] mx-auto px-10 ">
        <div>
          <div>
            <h1 className="text-5xl lg:text-left text-white text-center pt-14 font-bold">
              Our Fleet
            </h1>
          </div>
          <div className="lg:flex justify-between items-center pt-5">
            <h1 className=" text-center text-white lg:text-left text-sm lg:w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quam vero consectetur ea debitis neque velit eveniet quia,
              expedita.
            </h1>
            <div className="flex justify-center pt-5 lg:pt-0">
              <h1 className="border md:w-[120px] md:h-[50px] w-[100px] h-[30px] flex justify-center rounded-[20px] items-center text-white hover:text-black md:text-sm text-xs hover:bg-[#E6E1FF] cursor-pointer">
                View All
              </h1>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-between gap-10 pt-14">
            <div>
              {" "}
              <div className="bg-[#FBE9DA] rounded-xl p-3">
                <Image
                  className="xl:w-[400px] xl:h-[300px] lg:w-[350px] lg:h-[250px] w-[300px] h-[200px] transform hover:-scale-x-100 hover:scale-110 cursor-pointer"
                  src="/MERCEDES-BENZ_GLC-2022_main-removebg-preview.png"
                  width={400}
                  height={300}
                  alt=""
                ></Image>
              </div>
              <div className="flex items-center justify-between pt-5">
                {" "}
                <h1 className="text-xl text-white">Mercedez Benz</h1>
                <h1 className="border md:w-[120px] md:h-[50px] w-[100px] h-[30px] flex justify-center rounded-[20px] items-center text-white hover:text-black md:text-sm text-xs hover:bg-[#E6E1FF] cursor-pointer">
                  Rent
                </h1>
              </div>
            </div>
            <div>
              {" "}
              <div className="bg-[#FBE9DA]  rounded-xl p-3">
                <Image
                  className="transform -scale-x-100 xl:w-[400px] xl:h-[300px] lg:w-[350px] lg:h-[250px] w-[300px] h-[200px] hover:scale-110 cursor-pointer"
                  src="/G-ClassModelImage-removebg-preview.png"
                  width={400}
                  height={300}
                  alt=""
                ></Image>
              </div>
              <div className="flex items-center justify-between pt-5">
                {" "}
                <h1 className="text-xl text-white">Mercedez Benz</h1>
                <h1 className="border md:w-[120px] md:h-[50px] w-[100px] h-[30px] flex justify-center rounded-[20px] items-center text-white hover:text-black md:text-sm text-xs hover:bg-[#E6E1FF] cursor-pointer">
                  Rent
                </h1>
              </div>
            </div>
            <div>
              {" "}
              <div className="bg-[#FBE9DA] rounded-xl p-3">
                <Image
                  className="xl:w-[400px] xl:h-[300px] lg:w-[350px] lg:h-[250px] w-[300px] h-[200px] hover:scale-110 cursor-pointer transform hover:-scale-x-100"
                  src="/MERCEDES-BENZ_GLC-2022_main-removebg-preview.png"
                  width={400}
                  height={300}
                  alt=""
                ></Image>
              </div>
              <div className="flex items-center justify-between pt-5">
                {" "}
                <h1 className="text-xl text-white">Mercedez Benz</h1>
                <h1 className="border md:w-[120px] md:h-[50px] w-[100px] h-[30px] flex justify-center rounded-[20px] items-center text-white hover:text-black md:text-sm text-xs hover:bg-[#E6E1FF] cursor-pointer">
                  Rent
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fleet;
