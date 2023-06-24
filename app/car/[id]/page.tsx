import React from "react";
import Image from "next/image";
import { cars } from "@/components/cars";

type Props = {
  params: {
    id: string;
  };
};

function Page({ params: { id } }: Props) {
  const selectedCar = cars.find((car) => car.id.toString() === id);

  if (!selectedCar) {
    return (
      <div className="text-center text-3xl pt-10">Sorry, Car not found</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pt-28 ">
      <h1 className="text-5xl font-bold p-5 lg:text-left text-center">
        Check Out
      </h1>
      <div className="flex lg:flex-row flex-col justify-between gap-14 items-center  p-5">
        <div className="flex justify-center bg-[#FBE9DA] rounded-3xl p-5 h-[50vh] lg:w-[50%]">
          <Image src={selectedCar.image} width={500} height={500} alt="" />
        </div>
        <div className="lg:w-[50%] p-5 text-center">
          <h1 className="font-bold text-4xl">{selectedCar.name}</h1>
          <h1 className="text-2xl pt-5">GH₵{selectedCar.price}/day</h1>
          <div className=" text-sm pt-10">{selectedCar.details}</div>
          <div className="bg-black text-center w-full text-white mt-5 p-3 text-xl hover:bg-[#FBE9DA] transition-transform ease-out duration-200 hover:text-black hover:border cursor-pointer rounded-lg">
            Rent
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
