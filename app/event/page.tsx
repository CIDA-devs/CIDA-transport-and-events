"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "../event/event.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaMap, FaMapMarker, FaPhone, FaSearch } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { useInView } from "react-intersection-observer";

import { bookings } from "./bookings";
import next from "next/types";
import Footer from "@/components/footer";

const Event = () => {
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <>
      <Navbar />

      {/* Carousel-Banner here */}

      <div className="bg-gradient py-32 px-8 font-poppins h-[100%]">
        <h2 className="text-white text-[60px] font-extrabold md:w-[50%] text-form">
          Welcome to the events Section.
        </h2>
        <p className="text-white text-[18px] mb-[30px] font-poppins ">
          Enjoy our varieties of halls and decor and book an appointment.
        </p>

        <Link
          href="#bookNow"
          className="bg-yellow-500  py-[15px] px-[23px] rounded-xl text-white shadow-lg group:hover hover:bg-white hover:text-yellow-500 "
        >
          Book Now
        </Link>
        <section className="pt-24 pb-28 xl:px-18 lg:px-5 px-10 max-w-[1800px] mx-auto text-form2">
          <div className="p-5 rounded-xl  bg-white/40 flex lg:flex-row flex-col justify-center items-center gap-10">
            <div className="text-white">
              <h1 className="text-white/50 text-center">Booking Address</h1>
              <p>From: address,hotel,airport</p>
            </div>
            <div className="bg-white/40 lg:h-[50px] lg:w-[2px] w-full h-[2px]"></div>
            <div className="text-white">
              <h1 className="text-white/50 text-center">Drop Off Address</h1>
              <p>Distan,Hourly,Flat Rate</p>
            </div>
            <div className="bg-white/40 lg:h-[50px] lg:w-[2px] w-full h-[2px]"></div>
            <div className="text-white">
              <h1 className="text-white/50 text-center">Booking Date</h1>
              <p>April 16,2023</p>
            </div>
            <div className="bg-white/40 lg:h-[50px] lg:w-[2px] w-full h-[2px]"></div>
            <div className="text-white">
              <h1 className="text-white/50 text-center">Booking Time</h1>
              <p>12:25am</p>
            </div>
            <div className="bg-white/40 lg:h-[50px] lg:w-[2px] w-full h-[2px]"></div>
            <div className="text-center bg-yellow-500 p-3 rounded-md">
              <div className="flex justify-center text-3xl text-white">
                <ImCalendar />
              </div>

              <p className="pt-2 text-white">Book Now</p>
            </div>
          </div>
        </section>
      </div>

      <section className="my-32 mx-14  md:flex justify-evenly items-center font-poppins">
        <div>
          <h3 className="text-center font-medium text-yellow-500 uppercase text-form5">
            {" "}
            Get Up to 10% discount if you book before June 23rd!
          </h3>
          <h2 className="text-center text-[30px] font-extrabold text-[#270159] uppercase">
            Book your Hall Now
          </h2>
        </div>

        <div className=" relative">
          <input
            type="search"
            name="search"
            id="search"
            className="w-[100%] py-[20px] px-[20px] shadow-xl self-center rounded-md border-[#d2d2d2] border-2"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* <FaSearch className="absolute left-[85%] bottom-[30%] text-[#270159] group-hover: hover:text-yellow-500 cursor-pointer" /> */}
        </div>
      </section>

      <section className="my-24 md:mx-28 mx-8">
        {bookings
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (
              item.category.toLowerCase().includes(search.toLowerCase()) ||
              item.bigHallPrice.toLowerCase().includes(search.toLowerCase()) ||
              item.decor
                .toLowerCase()

                .includes(search.toLowerCase())
            ) {
              return item;
            }
          })

          .map((booking) => {
            return (
              <>
                <div className="md:flex justify-center items-start mb-[70px]">
                  <Image
                    src={booking.img}
                    alt="Img"
                    ref={ref}
                    className={`w-[500px] h-[300px] object-cover mb-[30px] rounded-2xl ${
                      inView ? "text-form6" : ""
                    }`}
                  />

                  <div
                    ref={ref}
                    className={`md:ml-[35px] md:w-[35%] ml-0 w-[100%] flex justify-between md:flex-col sm:flex-row ${
                      inView ? "text-form5" : ""
                    }`}
                  >
                    <div>
                    <h2 className="font-bold text-[#270159] uppercase text-[22px]">
                      {booking.hallName}
                    </h2>
                    <p></p>
                    <p className="text-center  text-black flex items-center">
                      <FaMapMarker className="text-yellow-500 mr-1" />
                      {booking.streetName}
                    </p>

                    <p className="text-center  text-black  flex items-center">
                      <FaPhone className="text-yellow-500 mr-1" />
                      {booking.phoneNumber}
                    </p>
                    </div>

                    <div className="flex flex-col">

                    <div className=" md:mt-[30px] sm:mt-0 ">
                      <h2 className="font-medium text-[#270159] uppercase text-[22px]">
                        Rates
                      </h2>

                      <p>
                        Big Hall -{" "}
                        <span className="text-yellow-500 font-bold">$</span>{" "}
                        {booking.bigHallPrice}
                      </p>
                      <p>
                        Chandeliers -{" "}
                        <span className="text-yellow-500 font-bold">$</span>{" "}
                        {booking.lightPrice}
                      </p>
                      <p>
                        Flowers -{" "}
                        <span className="text-yellow-500 font-bold">$</span>{" "}
                        {booking.flowerPrice}
                      </p>

                      <p>
                        Decors -{" "}
                        <span className="text-yellow-500 font-bold">$</span>{" "}
                        {booking.decor}
                      </p>
                    </div>

                    <Link href={`../booking/${booking.id}`}>
                      <button className="bg-yellow-500 mt-5 py-[10px] px-[23px] rounded-xl text-white shadow-lg group:hover hover:bg-[#270159] hover:text-white">
                        Book
                      </button>
                    </Link>
                    </div>
                    </div>
                  </div>
                
              </>
            );
          })}
      </section>

      <Footer />
    </>
  );
};

export default Event;



