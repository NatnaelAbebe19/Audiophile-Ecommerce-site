import React from "react";
import YX1 from "../assets/images/YX1.jpg";
import {motion} from "framer-motion"

const varianted = {
  initial:{
    opacity: 0,
    x: -100
  },
  animate:{
    opacity: 1,
    x: 0,
    transition: {delay: 0.15, duration: .35}
  }
}

export default function Product3() {
  return (
    <motion.div 
    variants={varianted}
    initial="initial"
    whileInView={"animate"}
    className="mx-auto mb-[6rem] flex w-[90%] max-w-[1110px] flex-col gap-8 md:flex-row md:gap-4">
      <div className="h-[250px] w-[100%] md:w-[50%]">
        <img
          src={YX1}
          alt="YX1 speaker"
          className="h-[100%] w-[100%] rounded-lg"
        />
      </div>
      <div className="flex h-[250px] w-[100%] flex-col items-center justify-center rounded-lg bg-[#F0F1F0] py-8 md:w-[50%]">
        <h1 className="fonts-bold text-2xl text-black md:text-3xl">YX1 Earphones</h1>
        <button className="mt-4 border border-stone-950  hover:bg-[#000] hover:text-white ease-in-out duration-300 bg-transparent px-6 py-3 text-[0.9rem] font-bold text-black">
          SEE PRODUCT
        </button>
      </div>
    </motion.div>
  );
}
