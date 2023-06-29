"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "../contact/contact.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaMap, FaMapMarker, FaPhone, FaSearch } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { useInView } from "react-intersection-observer";
import { HiFaceSmile } from "react-icons/hi2";

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillLike,
  } from "react-icons/ai";
import next from "next/types";
import Footer from "@/components/footer";

const Contact = () => {
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <>
      <Navbar />

      {/* Carousel-Banner here */}

      <div className="bg-gradient py-32 px-8 font-poppins h-[100%] text-center">
        <h2 className="text-white text-[60px] font-extrabold text-form">
          Contact Us
        </h2>
        <p className="text-white text-[18px] mb-[30px] font-poppins ">
          Contact to book or rent our cars and halls for any events{" "}
        </p>

        <Link
          href="#bookNow"
          className="bg-yellow-500  py-[15px] px-[23px] rounded-xl text-white shadow-lg group:hover hover:bg-white hover:text-yellow-500 "
        >
          Book Now
        </Link>
       
      </div>

      

      <section className="my-[80px] bg-slate-600 py-28">
      <h2 className="text-white/80 text-[30px] text-center font-extrabold text-form mb-7">
          Follow Us
        </h2>
      <div className="  flex justify-center items-center md:flex-row flex-col">
       <Link href="#">
       <div className="w-[60px] h-[60px] rounded-full shadow-lg flex justify-center items-center mx-6 bg-white">
          <AiFillFacebook className="text-[30px] text-center text-gray-500" />
        </div>
       </Link>
       <Link href="#">
       <div className="w-[60px] h-[60px] rounded-full shadow-lg flex justify-center items-center mx-6 bg-white">
        <AiFillInstagram className="text-[40px] text-center text-gray-500" />
        </div>
       </Link>
       <Link href="#">
       <div className="w-[60px] h-[60px] rounded-full shadow-lg flex justify-center items-center mx-6 bg-white">
        <AiFillTwitterSquare className="text-[40px] text-center text-gray-500" />
        </div>
       </Link>
        
      </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
