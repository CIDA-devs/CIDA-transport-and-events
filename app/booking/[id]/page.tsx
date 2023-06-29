"use client";

import React, { useState } from "react";
import Image from "next/image";
import { bookings } from "@/app/event/bookings";
import { FaTimes } from "react-icons/fa";

type Props = {
  params: {
    id: string;
  };
};

function Booking({ params: { id } }: Props) {
  const selectedHall = bookings.find((booking) => booking.id.toString() === id);
  const [modal, isModal] = useState(false);
  if (!selectedHall) {
    return (
      <div className="text-center text-3xl pt-10">Sorry, Hall not found</div>
    );
  }

  const openModal = () => {
    isModal(!modal);
  };

  return (
    <div className="max-w-7xl mx-auto lg:pt-28 pt-5">
      <h1 className="text-5xl font-bold p-5 lg:text-left text-center">
        Check Out
      </h1>
      <div className="flex lg:flex-row flex-col justify-between gap-14 items-center  p-5">
        <div className="flex justify-center rounded-3xl h-[50vh] lg:w-[50%] overflow-hidden">
          <Image src={selectedHall.img} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="lg:w-[50%] p-5">
          <h1 className="font-bold text-4xl">{selectedHall.hallName}</h1>
          <h1 className="text-2xl pt-5 font-poppins">
            GH₵{selectedHall.bigHallPrice} for {selectedHall.numOfDays} day/s
          </h1>
          <div className=" text-lg pt-6">
            <p>
              Book now on our website to secure your spot and enjoy an
              unforgettable experience!
            </p>
          </div>
          <button
            onClick={openModal}
            className="bg-black text-center w-full text-white mt-5 p-3 text-xl hover:bg-[#FFC107] transition-transform ease-out duration-200 hover:text-black hover:border cursor-pointer rounded-lg"
          >
            Book
          </button>
        </div>
      </div>

      {modal ? (
        <div className="z-[999px] fixed w[100%] h-[100%] backdrop-blur bg-black/60 top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col px-[30px] ">
          <FaTimes
            onClick={openModal}
            className="absolute top-0 right-0 text-[#232323] text-[2rem] my-[20px] mx-[30px] cursor-pointer rounded-full"
          />

          <Modal selectedHall={selectedHall} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Booking;

const Modal = (props: {
  selectedHall: { hallName: any; numOfDays: any; category: any };
}) => {
  const [modal, isModal] = useState(false);

  const openModal = () => {
    isModal(!modal);
  };

  const sendBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(hall, days, category, email, time, phone, name, lastname);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    sendBooking(e);
    openModal();
  };

  /*Form states */
  const [hall, setHall] = useState(props.selectedHall.hallName);
  const [days, setDays] = useState(props.selectedHall.numOfDays);
  const [category, setCategory] = useState(props.selectedHall.category);
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("Your Booking Time");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  return (
    <div className="bg-white rounded-md shadow-lg overflow-y-scroll w-[100%] md:w-[800px] px-[35px] py-[35px]">
      {/* <FaTimes onClick={openModal}/> */}
      <form id="contactForm">
        <h1 className="md:text-5xl text-4xl font-bold pt-[10px] pb-[10px] lg:text-left text-center">
          {hall}
        </h1>

        <p>
          Book now on our website to secure your spot and enjoy an unforgettable
          experience!
        </p>
        <div className="md:flex justify-between items-center">
          <input
            type="text"
            id="name"
            name="from_name"
            value={name}
            placeholder="Your First Name..."
            onChange={(e) => setName(e.target.value)}
            className="h-[45px] bg-white py-[6px] px-[20px] rounded-lg w-[100%] my-[20px] border-black/10 border-[1px]	mr-[8px]"
            required
          />

          <input
            type="text"
            id="lastname"
            name="from_lastname"
            value={lastname}
            placeholder="Your Last Name..."
            onChange={(e) => setLastname(e.target.value)}
            className="h-[45px] bg-white py-[6px] px-[20px] rounded-lg w-[100%] my-[20px] border-black/10 border-[1px]	mr-[8px]"
            required
          />
        </div>

        <div className="md:flex justify-between items-center">
          <input
            className="h-[45px] bg-white py-[6px] px-[20px] rounded-lg w-[100%] my-[20px] border-black/10 border-[1px]	mr-[8px]"
            aria-required="true"
            aria-invalid="false"
            placeholder="Your Phone..."
            value={phone}
            type="phone"
            name="from_phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            className="h-[45px] bg-white py-[6px] px-[20px] rounded-lg w-[100%] my-[20px] border-black/10 border-[1px]	mr-[8px]"
            aria-required="true"
            aria-invalid="false"
            placeholder="Your Email..."
            value={email}
            type="email"
            name="from_email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="md:flex justify-between items-center">
          <input
            type="text"
            id="name"
            name="from_hall"
            value={hall}
            placeholder="Your Hall Choice..."
            onChange={(e) => setHall(e.target.value)}
            className="h-[45px] bg-white py-[6px] px-[20px] rounded-lg w-[100%] my-[20px] border-black/10 border-[1px]	mr-[8px]"
            required
          />

          <input
            type="text"
            id="name"
            name="from_category"
            value={category}
            placeholder="Your Occasion..."
            onChange={(e) => setCategory(e.target.value)}
            className="h-[45px] bg-white py-[6px] px-[20px] rounded-lg w-[100%] my-[20px] border-black/10 border-[1px]	mr-[8px]"
            required
          />
        </div>

        <div className="md:flex justify-between items-center">
          <select
            name="from_days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="h-[45px] bg-white py-[6px] px-[20px] rounded-lg w-[100%] my-[20px]  border-black/10 border-[1px]	mr-[8px]"
            required
          >
            {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} days
              </option>
            ))}
          </select>

          <input
            className="h-[45px] bg-white py-[6px] px-[20px] rounded-lg w-[100%] my-[20px] border-black/10 border-[1px]	mr-[8px]"
            aria-required="true"
            aria-invalid="false"
            placeholder="Your Booking Time"
            value={time}
            type="time"
            name="from_time"
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="h-[45px] bg-black py-[6px] px-[20px] rounded-lg w-[100%] my-[20px] text-white duration-300	 group:hover hover:bg-black/30 hover:text-white" // onClick={sendEmail}
          onClick={handleButtonClick}
        >
          Send
        </button>
      </form>
    </div>
  );
};

{
  /* <Carousel
autoPlay
showIndicators
infiniteLoop
showStatus={false}
showThumbs={false}
showArrows
swipeable={false}
interval={10000}
>
<div className="relative">
<Image src={selectedHall.img} width={500} height={500} alt="" />
</div>

<div className="relative">
<Image src={selectedHall.img1} width={500} height={500} alt="" />
</div>
<div className="relative">
<Image src={selectedHall.img2} width={500} height={500} alt="" />
</div>


</Carousel> */
}
