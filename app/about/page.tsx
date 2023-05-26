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
import next from "next/types";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Carousel-Banner here */}

      <main>
        <section className="my-8 mx-16">
          <p className="text-[#181818] text-center text-2xl">
            Want to know more about us? We <br /> render services like car
            rentals and event planning services. It seems like youre trying to
            install the next-next-link package instead of next/link. However,
            based on the package name you provided, next-next-link, it appears
            that there might be a typo in the package name. you provided,
            next-next-link, it appears that there might be a typo in the package
            name. you provided, next-next-link, it appears that there might be a
            typo in the package name.
          </p>
        </section>

        <section className=" py-12 flex justify-evenly items-start">
          {/*Mission and Vision statements */}
          <div className="relative">
            <hr className="h-[90vh] w-[2px] bg-cyan-950 absolute left-[15%] hidden md:block" />
            <div className="w-[20px] h-[20px] bg-white border-cyan-950 border-[6px] rounded-full hidden md:block absolute -left-[9px] top-[100px]"></div>
            <div className="w-[20px] h-[20px] bg-white border-cyan-950 border-[6px] rounded-full hidden md:block absolute -left-[9px] top-[420px]"></div>
          </div>
          <div>
            <article className="relative mb-[80px]">
              <div className="bg-white w-[20px] h-[20px] rotate-45 absolute -left-[10px] top-[40%]"></div>
              <div className=" shadow-lg w-[350px] md:w-[657px] h-[250px] px-[30px] py-[30px] hover:shadow-2xl">
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
              <div className="bg-white w-[20px] h-[20px] rotate-45 absolute -left-[10px] top-[40%]"></div>
              <div className=" shadow-lg w-[350px] md:w-[657px] h-[250px] px-[30px] py-[30px] hover:shadow-2xl">
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

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity flex justify-center items-center z-50">
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
                  <Image loading="lazy" src={profile2} alt="" />
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
