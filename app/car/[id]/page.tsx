import React from "react";
import Image from "next/image";
import { cars } from "@/components/cars";

function page() {
  return (
    <div>
      <div>
        {" "}
        {cars.map((car) => (
          <div
            key={car.id}
            className="border p-5 hover:cursor-pointer hover:scale-105 transition-transform ease-out duration-200 hover:bg-[#FBE9DA]"
          >
            <div className="flex justify-center">
              <Image src={car.image} width={500} height={500} alt="" />
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-bold">{car.name}</h1>
              <h1>GH₵{car.price}/day</h1>
            </div>

            <div>{car.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
