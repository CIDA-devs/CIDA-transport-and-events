import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from "../../components/footer";
import "../about/about.css";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillLike,
} from "react-icons/ai";

import profile from "../../components/images/profile.jpg";
import profile2 from "../../components/images/profile2.jpg";
import wave from "../../components/images/wave.png";
import next from "next/types";
import { HiFaceSmile } from "react-icons/hi2";

const About = () => {
  return (
    <>
      <Navbar />

      {/* History-Banner here */}
      <div>
        {/* <section className="">
        <Image
                    loading="lazy"
                    className="w-[100%] absolute top-0 left-0 right-0 bottom-0 -z-10 h-[100vh] bg-cover"
                    src={profile}
                    alt=""
                  />
          <h2>ABOUT THE COMPANY</h2>
          <p className="text-[#181818] font-poppins text-center text-2xl">
            MR NOAH JD ANDERSON is a Ghanaian entrepreneur and a philanthropist
            with a foundation in Talent management. Mr Noah JD Anderson is the
            CEO of EMPIRE GROUP LTD a trade company with subsidiaries in Music
            Industry including Wammy Empire LTD, EMPIRE TOURS AND SPORTS
            MANAGEMENT, CIDA EVENTS LTD
          </p>
        </section> */}
      </div>

      <div className="about-us-div" id="about-us-div">
        <div className="text-box">
          <h2>About Us</h2>
        </div>
      </div>

      <section className=" my-[80px] flex justify-evenly items-center md:flex-row flex-col">
        <div className="md:w-[500px] h-[300px] py-[30px] px-[40px] shadow-lg flex justify-center items-center flex-col mb-[40px]">
          <AiFillLike className="text-[40px] text-center text-gray-500" />
          <h3 className="text-[18px]  text-sky-500">Our Mission</h3>
          <p className="text-[15px] font-light text-gray-400">
            We are a team of Lorem next-next-link, it appears that there might
            be a typo in the package name. We are a team of Lorem
            next-next-link, it appears that there might be a typo in the package
            name.
          </p>
        </div>
        <div className="md:w-[500px] h-[300px] py-[30px] px-[40px] shadow-lg flex justify-center items-center flex-col mb-[40px]">
          <HiFaceSmile className="text-[40px] text-center text-gray-500" />
          <h3 className="text-[18px]  text-sky-500">Our Vision</h3>
          <p className="text-[15px] font-light text-gray-400">
            We are a team of Lorem next-next-link, it appears that there might
            be a typo in the package name. We are a team of Lorem
            next-next-link, it appears that there might be a typo in the package
            name.
          </p>
        </div>
      </section>

      <section className="py-[50px] px-[30px] flex justify-evenly gap-10 items-center md:flex-row flex-col">
        <Image
          src={profile}
          alt="Img"
          className="w-[300px] h-[300px] object-cover mb-[30px]"
        />

        <div className="">
          <h2 className="text-center font-semi-bold text-[40px]">Our Story</h2>
          <p className="text-[#181818] md:max-w-lg md:text-left text-center pt-3">
            Mr.Noah JD Anderson is a Ghanaian entrepreneur and a philanthropist
            with a foundation in Talent management. Mr Noah JD Anderson is the
            CEO of EMPIRE GROUP LTD a trade company with subsidiaries in Music
            Industry including Wammy Empire LTD, EMPIRE TOURS AND SPORTS
            MANAGEMENT, CIDA EVENTS LTD.
          </p>
        </div>
      </section>
      <main>
        <section className="mt-[150px]">
          <div className="my-[30px]">
            <h2 className="text-[#181818] text-[50px] font-extrabold text-center">
              Meet our team
            </h2>
            <p className="text-[#181818] text-center font-medium text-[20px] ">
              Meet our diverse team of world-class creators and event planners.
            </p>
          </div>

          <section className="flex justify-evenly items-start flex-wrap my-8 md:mx-[150px] mx-0">
            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className="absolute inset-0 bg-black w-[300px] h-[400px] opacity-0 group-hover:opacity-60 transition-opacity flex justify-center items-center z-50">
                {/* Overlay content */}
                <div className=" flex justify-evenly items-center text-white">
                  <a href="http://">
                    <AiFillInstagram className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillFacebook className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillTwitterSquare className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                  <a href="http://">
                    <AiFillLinkedin className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                </div>
              </div>

              <div className=" z-10">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, CIDA
                </h1>
              </div>
            </article>

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className="absolute inset-0 bg-black w-[300px] h-[400px] opacity-0 group-hover:opacity-60 transition-opacity flex justify-center items-center z-50">
                {/* Overlay content */}
                <div className=" flex justify-evenly items-center text-white">
                  <a href="http://">
                    <AiFillInstagram className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillFacebook className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillTwitterSquare className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                  <a href="http://">
                    <AiFillLinkedin className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                </div>
              </div>

              <div className=" z-10">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile2}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, CIDA
                </h1>
              </div>
            </article>

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className="absolute inset-0 bg-black w-[300px] h-[400px] opacity-0 group-hover:opacity-60 transition-opacity flex justify-center items-center z-50">
                {/* Overlay content */}
                <div className=" flex justify-evenly items-center text-white">
                  <a href="http://">
                    <AiFillInstagram className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillFacebook className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillTwitterSquare className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                  <a href="http://">
                    <AiFillLinkedin className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                </div>
              </div>

              <div className=" z-10">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, CIDA
                </h1>
              </div>
            </article>

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className="absolute inset-0 bg-black w-[300px] h-[400px] opacity-0 group-hover:opacity-60 transition-opacity flex justify-center items-center z-50">
                {/* Overlay content */}
                <div className=" flex justify-evenly items-center text-white">
                  <a href="http://">
                    <AiFillInstagram className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillFacebook className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillTwitterSquare className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                  <a href="http://">
                    <AiFillLinkedin className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                </div>
              </div>

              <div className=" z-10">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile2}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, CIDA
                </h1>
              </div>
            </article>

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className="absolute inset-0 bg-black w-[300px] h-[400px] opacity-0 group-hover:opacity-60 transition-opacity flex justify-center items-center z-50">
                {/* Overlay content */}
                <div className=" flex justify-evenly items-center text-white">
                  <a href="http://">
                    <AiFillInstagram className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillFacebook className="text-[25px] opacity-100 mx-[5px]" />
                  </a>

                  <a href="http://">
                    <AiFillTwitterSquare className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                  <a href="http://">
                    <AiFillLinkedin className="text-[25px] opacity-100 mx-[5px]" />
                  </a>
                </div>
              </div>

              <div className=" z-10">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, CIDA
                </h1>
              </div>
            </article>
          </section>
        </section>
      </main>

      <section className="bg-[#f2f2f2] py-[40px] flex justify-evenly items-center md:flex-row flex-col">
        <div className="">
          <h2 className="text-center font-semi-bold text-[30px] md:max-w-[500px]">
            Do you want to be part to team?
          </h2>
          <p className="text-[#181818] md:max-w-[500px] text-center p-5">
            We are a team of Lorem next-next-link, it appears that there might
            be a typo in the package name. We are a team of Lorem
            next-next-link, it appears that there might be a typo in the package
            name.
          </p>
        </div>

        <Image
          src={profile}
          alt="Img"
          className="w-[300px] h-[300px] object-cover "
        />
      </section>

      <section className=" my-[80px] flex justify-evenly items-center md:flex-row flex-col">
        <div className="w-[300px] h-[300px] shadow-lg flex justify-center items-center flex-col mb-[40px]">
          <AiFillLike className="text-[40px] text-center text-gray-500" />
          <h3 className="text-[18px] text-gray-400">Projects</h3>
          <h2 className="text-[30px] font-bold text-sky-500">50</h2>
        </div>
        <div className="w-[300px] h-[300px] shadow-lg flex justify-center items-center flex-col mb-[40px]">
          <HiFaceSmile className="text-[40px] text-center text-gray-500" />
          <h3 className="text-[18px] text-gray-400">Clients</h3>
          <h2 className="text-[30px] font-bold text-sky-500">20</h2>
        </div>
        <div className="w-[300px] h-[300px] shadow-lg flex justify-center items-center flex-col mb-[40px]">
          <AiFillLike className="text-[40px] text-center text-gray-500" />
          <h3 className="text-[18px] text-gray-400">Projects</h3>
          <h2 className="text-[30px] font-bold text-sky-500">50</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

// <section className=" pb-12 flex justify-center items-start overflow-hidden">
{
  /*Mission and Vision statements */
}
//   <div className="relative">
//     <hr className="h-[90vh] w-[2px] bg-cyan-950 absolute left-[15%] hidden md:block" />
//     <div className="w-[20px] h-[20px] bg-white border-cyan-950 border-[6px] rounded-full hidden md:block absolute -left-[9px] top-[100px]"></div>
//     <div className="w-[20px] h-[20px] bg-white border-cyan-950 border-[6px] rounded-full hidden md:block absolute -left-[9px] top-[420px]"></div>
//   </div>
//   <div>
//     <article className="relative mb-[80px]">
//       <div className="bg-white w-[20px] h-[20px]  hidden md:block rotate-45 absolute -left-[10px] top-[40%]"></div>
//       <div className=" shadow-lg w-[350px] md:w-[657px] md:h-[250px] px-[30px] py-[30px] hover:shadow-2xl">
//         <h2 className="text-sky-400 text-[30px] font-bold">
//           Our Mission
//         </h2>
//         <p>
//           It seems like youre trying to install the next-next-link package
//           instead of next/link. However, based on the package name you
//           provided, next-next-link, it appears that there might be a typo
//           in the package name. you provided, next-next-link, it appears
//           that there might be a typo in the package name. you provided,
//           next-next-link, it appears that there might be a typo in the
//           package name.
//         </p>
//       </div>
//     </article>

//     <article className="relative">
//       <div className="bg-white w-[20px] h-[20px]  hidden md:block rotate-45 absolute -left-[10px] top-[40%]"></div>
//       <div className=" shadow-lg w-[350px] md:w-[657px] md:h-[250px] px-[30px] py-[30px] hover:shadow-2xl">
//         <h2 className="text-sky-400 text-[30px] font-bold">Our Vision</h2>
//         <p>
//           It seems like youre trying to install the next-next-link package
//           instead of next/link. However, based on the package name you
//           provided, next-next-link, it appears that there might be a typo
//           in the package name. you provided, next-next-link, it appears
//           that there might be a typo in the package name. you provided,
//           next-next-link, it appears that there might be a typo in the
//           package name.
//         </p>
//       </div>
//     </article>
//   </div>
// </section>
