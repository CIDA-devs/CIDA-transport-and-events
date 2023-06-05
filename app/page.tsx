import React from "react";
import Navbar from "../components/navbar";
import Carousel from "@/components/carousel";
import Okay from "../components/okay";
import Events from "../components/events";
import Transport from "@/components/transport";
import Fleet from "../components/fleet";
import What from "@/components/what";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Events />
      <Okay />
      <Transport />
      <Fleet />
      <What />
    </div>
  );
}
