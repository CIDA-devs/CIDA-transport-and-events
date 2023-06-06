"use client";

import React from "react";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

function events() {
  return (
    <div className="-mt-10">
      {" "}
      <div className="lg:flex pt-10 justify-between w-full">
        <div className="bg-[#7F7ADE] w-full lg:pt-16 pt-8">
          <motion.h1
            initial={{
              opacity: 0,
              translateY: 50,
            }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }}
            className="text-center text-white lg:text-4xl text-2xl lg:pb-3 font-semibold"
          >
            Let us make your events
          </motion.h1>

          <div className="flex justify-center relative pt-5">
            <Image
              src="/photo_2023-06-01_16-08-08.jpg"
              className="w-[250px] h-[300px] rounded-2xl"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <motion.h1
              initial={{
                opacity: 0,
                translateY: 50,
              }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "linear",
                duration: 0.5,
                delay: 0.1,
              }}
              className="font-semibold absolute lg:-top-2 top-0  text-center text-2xl lg:text-4xl text-white "
            >
              Memorable
            </motion.h1>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              translateY: 50,
            }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }}
            className=" flex justify-center"
          >
            {" "}
            <p className="text-center pt-10 lg:text-sm text-xs  lg:w-[500px] w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              placeat, explicabo quo ut consequatur ratione inventore quaerat.
              Velit, autem, cumque facilis
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              translateX: -50,
            }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }}
            className="text-white flex justify-center mt-5 text-5xl font-extralight pb-5 lg:pb-0"
          >
            <HiArrowLongRight className="bg-white/10 rounded-full p-2 w-[100px] hover:bg-white hover:text-black cursor-pointer" />
          </motion.div>
        </div>
        <div className="w-full">
          <Image
            src="/pexels-rdne-stock-project-7551764.jpg"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default events;
