import React from "react";
import manWith from "../assets/images/manWith.jpg";
import {motion} from "framer-motion"

const variante2 = {
  initial:{
    opacity: 0,
    x: 100
  }, 
  animate: {
    opacity: 1, 
    x: 0,
    transition: {delay: 0.10, duration: 0.35}
  }
}

const variante1 = {
  initial:{
    opacity: 0,
    x: -100
  }, 
  animate: {
    opacity: 1, 
    x: 0,
    transition: {delay: 0.10, duration: 0.35}
  }
}

export default function ManWithHeadset() {
  return (
    <div className="mx-auto mb-8 flex max-w-[1110px] flex-col overflow-hidden md:h-[500px] md:w-[90%] md:flex-row">
      <motion.div 
      variants={variante1}
      initial = "initial"
      whileInView={"animate"}
      className="order-2 flex flex-grow flex-col items-center justify-center px-12 md:order-1  md:w-[50%] md:items-start"
      viewport={{once: true}}
      >
        <h1 className="pb-8 text-center text-2xl font-bold md:text-left md:text-3xl lg:text-4xl ">
          BRINGING YOU THE <br />
          <span className="text-[#D47B4F]">BEST</span> AUDIO GEAR
        </h1>
        <p className="w-[85%] text-center font-medium leading-6 text-gray-500 md:text-left lg:w-[%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </motion.div>
      <motion.div 
      variants={variante2}
      initial = "initial"
      whileInView={"animate"}
      className="order-1 mx-auto mb-8 h-[350px] w-[90%] overflow-hidden rounded-lg md:order-2 md:h-auto md:w-[50%]"
      viewport={{once: true}}
      >
        <img
          src={manWith}
          alt="A man with a headset"
          className="h-[100%] w-[100%]"
        />
      </motion.div>
    </div>
  );
}
