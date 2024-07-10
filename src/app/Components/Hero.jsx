"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import mfavatar from "../../../public/img.jpg";
import { motion } from "framer-motion";

// const variants = {
//   init: {x: "-100%", opacity: 0 },
//   animate: {}
// }

const Hero = () => {
  return (
    <section className="h-[100vh] md:h-[100vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8}}
          className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span> Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jeremiah",
                1000,
                "Web Developer",
                1000,
                "Blockchain Developer",
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my world of creativity, where innovative solutions come
            to life. Explore my portfolio!
          </p>
          <div>
            <a href="#contact">
              <motion.button 
              whileHover= {{scale: 1.1}}
              whileTap={{scale:.9}}
              className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
                Hire me
              </motion.button>
            </a>
            <a href="./resume.pdf" target="_blank" download rel="noopener nonreferrer">
              <motion.button 
              whileHover= {{scale: 1.1}}
              whileTap={{scale:.9}}
              className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border   border-white mt-3">
                Download CV
              </motion.button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 0  }}
          animate={{ y: 0,opacity: 1 }}
          transition={{ duration: 0.8}}
          className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src={mfavatar}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt="hero image"
              width={400}
              height={400}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
