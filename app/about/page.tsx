import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

import profile from "../../components/images/profile.jpg";
import profile2 from "../../components/images/profile2.jpg";
import wave from "../../components/images/wave.png";
import next from "next/types";

const About = () => {
  return (
    <>
      <Navbar />

      {/* History-Banner here */}
      <div>
        <section className="bg-[#333333]">
          <h2>ABOUT THE COMPANY</h2>
          <p className="text-[#181818] font-poppins text-center text-2xl">
            MR NOAH JD ANDERSON is a Ghanaian entrepreneur and a philanthropist
            with a foundation in Talent management. Mr Noah JD Anderson is the
            CEO of EMPIRE GROUP LTD a trade company with subsidiaries in Music
            Industry including Wammy Empire LTD, EMPIRE TOURS AND SPORTS
            MANAGEMENT, CIDA EVENTS LTD
          </p>
        </section>
        {/* Svg here */}
        <div className="w-full object-cover h-[60vh]">
          <svg
            id="visual"
            // viewBox="0 0 900 675"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 224L21.5 207.3C43 190.7 86 157.3 128.8 148.3C171.7 139.3 214.3 154.7 257.2 165.3C300 176 343 182 385.8 172.2C428.7 162.3 471.3 136.7 514.2 129.5C557 122.3 600 133.7 642.8 153.3C685.7 173 728.3 201 771.2 212.2C814 223.3 857 217.7 878.5 214.8L900 212L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#333333"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </svg>
        </div>
      </div>

      <main>
        <section className=" pb-12 flex justify-evenly items-start overflow-hidden">
          {/*Mission and Vision statements */}
          <div className="relative">
            <hr className="h-[90vh] w-[2px] bg-cyan-950 absolute left-[15%] hidden md:block" />
            <div className="w-[20px] h-[20px] bg-white border-cyan-950 border-[6px] rounded-full hidden md:block absolute -left-[9px] top-[100px]"></div>
            <div className="w-[20px] h-[20px] bg-white border-cyan-950 border-[6px] rounded-full hidden md:block absolute -left-[9px] top-[420px]"></div>
          </div>
          <div>
            <article className="relative mb-[80px]">
              <div className="bg-white w-[20px] h-[20px]  hidden md:block rotate-45 absolute -left-[10px] top-[40%]"></div>
              <div className=" shadow-lg w-[350px] md:w-[657px] md:h-[250px] px-[30px] py-[30px] hover:shadow-2xl">
                <h2 className="text-sky-400 text-[30px] font-bold">
                  Our Mission
                </h2>
                <p>
                  It seems like youre trying to install the next-next-link
                  package instead of next/link. However, based on the package
                  name you provided, next-next-link, it appears that there might
                  be a typo in the package name. you provided, next-next-link,
                  it appears that there might be a typo in the package name. you
                  provided, next-next-link, it appears that there might be a
                  typo in the package name.
                </p>
              </div>
            </article>

            <article className="relative">
              <div className="bg-white w-[20px] h-[20px]  hidden md:block rotate-45 absolute -left-[10px] top-[40%]"></div>
              <div className=" shadow-lg w-[350px] md:w-[657px] md:h-[250px] px-[30px] py-[30px] hover:shadow-2xl">
                <h2 className="text-sky-400 text-[30px] font-bold">
                  Our Vision
                </h2>
                <p>
                  It seems like youre trying to install the next-next-link
                  package instead of next/link. However, based on the package
                  name you provided, next-next-link, it appears that there might
                  be a typo in the package name. you provided, next-next-link,
                  it appears that there might be a typo in the package name. you
                  provided, next-next-link, it appears that there might be a
                  typo in the package name.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-[#181818] font-poppins text-[50px] font-extrabold text-center">
            SERVICES WE OFFER
          </h2>
        </section>

        <section className="mt-[150px]">
          <div className="my-[30px]">
            <h2 className="text-[#181818] text-[50px] font-extrabold text-center">
              Meet our team
            </h2>
            <p className="text-[#181818] text-center font-medium text-[20px] max-w-[500px] md:max-w-[100%]">
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
                <h1 className="text-black text-center">CIDA CIDAIOUS</h1>
                <h1 className="text-black text-center">Secretary, CIDA</h1>
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
                <h1 className="text-black text-center">CIDA CIDAIOUS</h1>
                <h1 className="text-black text-center">Secretary, CIDA</h1>
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
                <h1 className="text-black text-center">CIDA CIDAIOUS</h1>
                <h1 className="text-black text-center">Secretary, CIDA</h1>
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
                <h1 className="text-black text-center">CIDA CIDAIOUS</h1>
                <h1 className="text-black text-center">Secretary, CIDA</h1>
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
                <h1 className="text-black text-center">CIDA CIDAIOUS</h1>
                <h1 className="text-black text-center">Secretary, CIDA</h1>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
};

export default About;
