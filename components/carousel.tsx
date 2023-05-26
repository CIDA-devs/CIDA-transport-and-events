"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function carousel() {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={10000}
      >
        {/* carousel video for events */}
        <div className="relative">
          <video
            className="w-full object-cover h-[80vh]"
            autoPlay
            loop
            src="/pexels-vimeo-857149-1920x742-30fps.mp4"
          ></video>
          <div className="bg-black/40 h-screen absolute top-0 bottom-0 right-0 left-0"></div>
          {/* text on the video events */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center w-[100%]  h-[90vh] absolute top-0 px-10 ">
              <div>
                <h1 className="text-white lg:text-8xl md:text-5xl text-3xl font-bold text-left">
                  PLAN YOUR EVENTS <br /> WITH US
                </h1>
                <p className="text-white lg:text-xl text-[12px] pt-5 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam deserunt corporis rem <br /> iure voluptate commodi
                  blanditiis placeat
                </p>
                <h1 className="text-left font-semibold shadow-md cursor-pointer hover:bg-white hover:text-black  text-white mt-14  w-[130px] h-[50px] flex justify-center items-center bg-blue-600">
                  LEARN MORE
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* carousel video for car rentals */}
        <div className="relative">
          <video
            className="w-full object-cover h-[80vh]"
            autoPlay
            loop
            src="/pexels-taryn-elliott-5309381-1920x1080-25fps.mp4"
          ></video>
          <div className="bg-black/40 h-screen absolute top-0 bottom-0 right-0 left-0"></div>
          {/* text on the video car rentals */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center w-[100%]  h-[90vh] absolute top-0 px-10 ">
              <div>
                <h1 className="text-white lg:text-8xl md:text-5xl text-3xl font-bold text-left">
                  RENT YOUR CARS <br /> FROM US
                </h1>
                <p className="text-white lg:text-xl text-[12px] pt-5 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam deserunt corporis rem <br /> iure voluptate commodi
                  blanditiis placeat
                </p>
                <h1 className="text-left font-semibold shadow-md cursor-pointer hover:bg-white hover:text-black  text-white mt-14  w-[130px] h-[50px] flex justify-center items-center bg-blue-600">
                  LEARN MORE
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}


// export default function AboutCarousel() {
//   return (
//     <div>
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showStatus={false}
//         showThumbs={false}
//         interval={10000}
//       >
//         {/* carousel video for events */}
//         <div className="relative">
//           <video
//             className="w-full object-cover h-[8         first-letter:0vh]"
//             autoPlay
//             loop
//             src="/pexels-vimeo-857149-1920x742-30fps.mp4"
//           ></video>
//           <div className="bg-black/40 h-screen absolute top-0 bottom-0 right-0 left-0"></div>
//           {/* text on the video events */}
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center w-[100%]  h-[90vh] absolute top-0 px-10 ">
//               <div>
//                 <h1 className="text-white text-8xl font-bold text-left">
//                   PLAN YOUR EVENTS <br /> WITH US
//                 </h1>
//                 <p className="text-white text-xl pt-5 text-left">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Numquam deserunt corporis rem <br /> iure voluptate commodi
//                   blanditiis placeat
//                 </p>
//                 <h1 className="text-left font-semibold shadow-md cursor-pointer hover:bg-white hover:text-black  text-white mt-14  w-[130px] h-[50px] flex justify-center items-center bg-blue-600">
//                   LEARN MORE
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* carousel video for car rentals */}
//         <div className="relative">
//           <video
//             className="w-full object-cover h-[80vh]"
//             autoPlay
//             loop
//             src="/pexels-taryn-elliott-5309381-1920x1080-25fps.mp4"
//           ></video>
//           <div className="bg-black/40 h-screen absolute top-0 bottom-0 right-0 left-0"></div>
//           {/* text on the video car rentals */}
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center w-[100%]  h-[90vh] absolute top-0 px-10 ">
//               <div>
//                 <h1 className="text-white text-8xl font-bold text-left">
//                   RENT YOUR CARS <br /> FROM US
//                 </h1>
//                 <p className="text-white text-xl pt-5 text-left">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Numquam deserunt corporis rem <br /> iure voluptate commodi
//                   blanditiis placeat
//                 </p>
//                 <h1 className="text-left font-semibold shadow-md cursor-pointer hover:bg-white hover:text-black  text-white mt-14  w-[130px] h-[50px] flex justify-center items-center bg-blue-600">
//                   LEARN MORE
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Carousel>
//     </div>
//   );
// }
