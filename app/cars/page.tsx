import React from "react";
import { cars } from "@/components/cars";
import Carpage from "@/components/carpage";
import Navbar from "@/components/navbar2";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";

function page() {
  return (
    <div>
      <Navbar />
      <Carpage />
      <div className="max-w-7xl mx-auto px-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {cars.map((car) => (
          <Link
            key={car.id}
            href={`../car/${car.id}`}
            className="border p-5 hover:cursor-pointer hover:scale-105 transition-transform ease-out duration-200 hover:bg-[#FBE9DA]"
          >
            <div className="flex justify-center">
              <Image src={car.image} width={500} height={500} alt="" />
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-bold">{car.name}</h1>
              <h1>GH₵{car.price}/day</h1>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default page;
