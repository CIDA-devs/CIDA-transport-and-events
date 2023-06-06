import React from "react";
import Navbar from "../components/navbar";
import Carousel from "@/components/carousel";
import Okay from "../components/okay";
import Events from "../components/events";
import Transport from "@/components/transport";
import Fleet from "../components/fleet";
import What from "@/components/what";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="font-poppins">
      <Carousel />
      <Navbar />
      <Events />
      <Okay />
      <Transport />
      <Fleet />
      <What />
      <Footer />
    </div>
  );
}
