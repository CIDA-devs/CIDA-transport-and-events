import React from "react";
import Image from "next/image";

function about() {
  return (
    <div className="">
      <div className="bg-[#F2F3F8] pb-10">
        <div className="flex justify-between items-center max-w-[1800px] mx-auto px-10 py-8">
          <h1 className="md:text-2xl text-sm font-semibold">
            OUR EVENT PLANNING
          </h1>
          <h1 className="border md:w-[120px] md:h-[50px] w-[100px] h-[30px] flex justify-center rounded-[20px] items-center text-black md:text-sm text-xs hover:bg-[#E6E1FF] cursor-pointer">
            View All
          </h1>
        </div>
        <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 xl:grid-cols-4 place-items-center grid-cols-1  gap-8 px-10 md:py-5 pb-10">
          {" "}
          <div className="relative hover:scale-105 cursor-pointer ">
            <Image
              className="w-[400px]   lg:h-[300px] h-[250px] rounded-t-lg"
              src="/pexels-rdne-stock-project-6518974.jpg"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <div className="flex items-center bg-white p-3 h-[70px] text-black absolute justify-between w-full rounded-[20px] top-[85%]">
              <h1 className="text-[18px] font-semibold">Birthday Parties</h1>

              <h1 className="text-black text-[14px] font-medium hover:bg-[#E6E1FF] cursor-pointer border flex justify-center items-center p-2 rounded-[30px]">
                Book Us
              </h1>
            </div>
          </div>
          <div className="relative hover:scale-105 mt-5 cursor-pointer md:mt-0">
            <Image
              className="w-[400px] lg:h-[300px] h-[250px] cursor-pointer rounded-t-lg"
              src="/pexels-transtudios-photography-&-video-3082764.jpg"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <div className="flex items-center bg-white p-3 h-[70px] text-black absolute justify-between w-full rounded-[20px] top-[85%]">
              <h1 className="text-[18px] font-semibold">Weddings</h1>

              <h1 className="text-black text-[14px] font-medium hover:bg-[#E6E1FF] cursor-pointer border flex justify-center items-center p-2 rounded-[30px]">
                Book Us
              </h1>
            </div>
          </div>
          <div className="relative hover:scale-105 mt-5 cursor-pointer md:mt-0">
            {" "}
            <Image
              className="w-[400px] lg:h-[300px] h-[250px] cursor-pointer  rounded-t-lg"
              src="/pexels-pixabay-207691.jpg"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <div className="flex items-center bg-white p-3 h-[70px] cursor-pointer text-black absolute justify-between w-full rounded-[20px] top-[85%]">
              <h1 className="text-[18px] font-semibold">Seminars</h1>

              <h1 className="text-black text-[14px] font-medium hover:bg-[#E6E1FF] cursor-pointer border flex justify-center items-center p-2 rounded-[30px]">
                Book Us
              </h1>
            </div>
          </div>
          <div className="relative hover:scale-105 mt-5 md:mt-0 cursor-pointer">
            <Image
              className="w-[400px] lg:h-[300px] h-[250px] cursor-pointer rounded-t-lg"
              src="/pexels-pixabay-50675.jpg"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <div className="flex items-center bg-white p-3 h-[70px] text-black absolute justify-between w-full rounded-[20px] top-[85%]">
              <h1 className="text-[18px] font-semibold">Conferences</h1>

              <h1 className="text-black text-[14px] font-medium hover:bg-[#E6E1FF] cursor-pointer border flex justify-center items-center p-2 rounded-[30px]">
                Book Us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
