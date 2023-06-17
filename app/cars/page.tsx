import React from "react";
import { cars } from "@/components/cars";
import Carpage from "@/components/carpage";
import Navbar from "@/components/navbar2";
function page() {
  return (
    <div>
      <Navbar />
      <Carpage />
      <div>
        {cars.map((car, index) => {
          return (
            <div key={index}>
              <h1>{car.name}</h1>
              <h1>{car.price}/day</h1>
              <h1 className="truncate">{car.details}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
