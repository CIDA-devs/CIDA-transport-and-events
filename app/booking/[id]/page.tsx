import React from "react";
import Image from "next/image";
import { bookings } from "@/app/event/bookings";

type Props = {
    params: {
      id: string;
    };
  };

function Booking({ params: { id } }: Props) {
    const selectedHall = bookings.find((booking) => booking.id.toString() === id);

    if (!selectedHall) {
      return (
        <div className="text-center text-3xl pt-10">Sorry, Hall not found</div>
      );
    }

    
  
    return (
      <div className="max-w-7xl mx-auto lg:pt-28 pt-5">
        <h1 className="text-5xl font-bold p-5 lg:text-left text-center">
          Check Out
        </h1>
        <div className="flex lg:flex-row flex-col justify-between gap-14 items-center  p-5">
          <div className="flex justify-center rounded-3xl h-[50vh] lg:w-[50%] overflow-hidden">
            <Image src={selectedHall.img} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="lg:w-[50%] p-5">
            <h1 className="font-bold text-4xl">{selectedHall.hallName}</h1>
            <h1 className="text-2xl pt-5 font-poppins">GH₵{selectedHall.bigHallPrice} for {selectedHall.numOfDays} day/s</h1>
            <div className=" text-lg pt-6">
              <p>Book now on our website to secure your spot and enjoy an unforgettable experience!</p>
            </div>
            <button className="bg-black text-center w-full text-white mt-5 p-3 text-xl hover:bg-[#FFC107] transition-transform ease-out duration-200 hover:text-black hover:border cursor-pointer rounded-lg">
              Book
            </button>
          </div>
        </div>
      </div>
    )
}

export default Booking



const Modal =()=> {
  return(
    <>
    <div>
      I am a modal
    </div>
    </>
  )
}



{/* <Carousel
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


</Carousel> */}