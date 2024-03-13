import React from "react";
import Datas from "./datas/devices";
import { MdKeyboardArrowRight } from "react-icons/md";
import {motion, useInView, useAnimation} from "framer-motion"
import {NavLink} from "react-router-dom"

const fadeInAnimationVariants = {
  initial:{
    opacity: 0,
    y: 200
  }, 
  animate: (index)=>({
    opacity: 1, 
    y: 0,
    transition: {delay: 0.05 * index, duration: 0.35}
  })
}


export default function SingleDevices(props) {
  return (
    <div className="mx-auto mt-[5rem] flex w-full max-w-[1110px] flex-col md:mt-[7rem] md:flex-row">
      {Datas.map((Data, index) => (
        <motion.div 
        key={Data.id} 
        className={`mx-auto mb-16 ${index==2? `mb-${props.lower}`:''} flex h-[165px] w-[320px]  flex-col items-center rounded-lg bg-[#f2f2f2]`}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
        viewport={{once: true}}>
          <img
            src={Data.imag}
            alt="the combined it siyes"
            className={` mx-auto mt-[-3rem] `}
          />
          <h1 className="py-5 text-[20px] font-bold uppercase">{Data.name}</h1>
          <NavLink to={`${Data.direct}`}>
            <h2 className="flex items-center text-gray-600 hover:text-[orange] ease-in-out duration-300">
              Shop
              <span className="text-2xl text-[orange]">
                <MdKeyboardArrowRight />
              </span>
            </h2>
          </NavLink>  
        </motion.div>
      ))}
    </div>
  );
}
