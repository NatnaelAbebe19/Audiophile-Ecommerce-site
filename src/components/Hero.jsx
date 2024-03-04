import React from "react";
import {motion, useInView, useAnimation} from "framer-motion"
import BigHeadset from "../assets/images/Bitmap.png";

const fadeInAnimationVariants = {
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
const fadeInAnimationVariants2 = {
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
export default function Hero() {
  return (
    <div className="mx-auto mb-8  flex flex-col items-center overflow-hidden bg-[#131313]">
      <div className=" flex max-w-[1110px] items-center justify-center md:w-[80%] ">
        <motion.div 
        variants={fadeInAnimationVariants2}
        initial="initial"
        whileInView="animate"
        className="absolute top-[35%] mx-auto flex max-w-[80%] flex-col items-center text-center text-white md:static md:w-[50%] md:items-start md:text-left">
          <p className="tracking-[5px] text-gray-400">NEW PRODUCT</p>
          <h1 className="mb-4 mt-2 text-3xl font-bold md:text-4xl">
            XX99 MARK II HEADPHONE
          </h1>
          <p className="max-w-[400px] text-gray-200 md:text-[1.2rem]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionte music enthsiast.
          </p>
          <button className="mt-4 bg-[#D87D4A] px-6 py-3 hover:bg-[#dd8f62] ease-in-out duration-300 text-[0.9rem] font-bold text-white">
            SEE PRODUCT
          </button>
        </motion.div>
        <motion.div 
            className="md:w-[50%]"  
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate" >
                <img
                  src={BigHeadset}
                  alt="The bigest headset ever in the pagge"
                  className="mx-auto mb-[4rem] h-[70vh] md:mx-0 md:w-[100%]"
                />
        </motion.div>
      </div>
    </div>
  );
}
