import React from "react";
import Navbar from "../components/navbar";
import Carousel from "@/components/carousel";
import Okay from "../components/okay";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Okay />
    </div>
  );
}
