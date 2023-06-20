"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "../event/event.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaMap, FaMapMarker, FaPhone, FaSearch } from "react-icons/fa";

import hall from "../../components/images/hall.jpg";
import hall2 from "../../components/images/hall2.jpg";
import birthday from "../../components/images/birthday.jpg";
import seminar from "../../components/images/seminar.jpg";
import conference from "../../components/images/conference.jpg";
import next from "next/types";

const About = () => {
  const [search, setSearch] = useState("");
  const bookings = [
    {
      id: 1,
      img: hall,
      hallName: "Red House Hall",
      streetName: "Street Name",
      phoneNumber: "0000 000 000",
      bigHallPrice: "50,000",
      lightPrice: "10,000",
      flowerPrice: "2,000",
      decor: "20,000",
      category: "Wedding",
    },
    {
      id: 2,
      img: hall2,
      hallName: "WeOutSide Hall",
      streetName: "Street Name",
      phoneNumber: "0000 000 000",
      bigHallPrice: "70,000",
      lightPrice: "0",
      flowerPrice: "5,000",
      decor: "30,000",
      category: "Wedding",
    },
    {
      id: 3,
      img: birthday,
      hallName: "Sprinter Pool",
      streetName: "Street Name",
      phoneNumber: "0000 000 000",
      bigHallPrice: "50,000",
      lightPrice: "10,000",
      flowerPrice: "2,000",
      decor: "20,000",
      category: "Birthday",
    },
    {
      id: 4,
      img: seminar,
      hallName: "Trojan Horse Hall",
      streetName: "Street Name",
      phoneNumber: "0000 000 000",
      bigHallPrice: "70,000",
      lightPrice: "0",
      flowerPrice: "5,000",
      decor: "5,000",
      category: "Seminar",
    },
    {
      id: 5,
      img: conference,
      hallName: "Starlight Conference Hall",
      streetName: "Street Name",
      phoneNumber: "0000 000 000",
      bigHallPrice: "70,000",
      lightPrice: "0",
      flowerPrice: "5,000",
      decor: "20,000",
      category: "Conference",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Carousel-Banner here */}

      <div className="bg-gradient py-32 px-28 font-poppins">
        <h2 className="text-white text-[60px] font-extrabold md:w-[50%] ">
          Welcome to the events Section.
        </h2>
        <p className="text-white text-[18px] mb-[30px] font-poppins">
          Enjoy our varieties of halls and decor and book an appointment.
        </p>

        <Link
          href="#bookNow"
          className="bg-yellow-500  py-[15px] px-[23px] rounded-xl text-white shadow-lg group:hover hover:bg-white hover:text-yellow-500 "
        >
          Book Now
        </Link>
      </div>

      <section className="my-32 mx-16 md:flex justify-evenly items-center font-poppins">
        <div>
          <h3 className="text-center font-medium text-yellow-500 uppercase">
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

      <section className="my-24 mx-28">
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
                    className="w-[500px] h-[300px] object-cover mb-[30px] rounded-2xl"
                  />

                  <div className="md: ml-[35px] md:w-[35%]">
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

                    <div className=" mt-[30px]">
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

                    <button className="bg-yellow-500 mt-5 py-[10px] px-[23px] rounded-xl text-white shadow-lg group:hover hover:bg-[#270159] hover:text-white">
                      Book
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </section>

      <section className="bg-[#270159] py-[40px]">

      </section>
    </>
  );
};

export default About;
