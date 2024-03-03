import React from "react";

import BigHeadset from "../assets/images/Bitmap.png";

export default function Hero() {
  return (
    <div className="mx-auto mb-8  flex flex-col items-center overflow-hidden bg-[#131313]">
      <div className=" flex max-w-[1110px] items-center justify-center md:w-[80%] ">
        <div className="absolute top-[35%] mx-auto flex max-w-[80%] flex-col items-center text-center text-white md:static md:w-[50%] md:items-start md:text-left">
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
        </div>
        <div className="md:w-[50%]">
          <img
            src={BigHeadset}
            alt="The bigest headset ever in the pagge"
            className="mx-auto mb-[4rem] h-[70vh] md:mx-0 md:w-[100%]"
          />
        </div>
      </div>
    </div>
  );
}
{
  /* <div className='bg-[#f2f2f2] flex flex-col w-[327px] h-[165px] mx-auto rounded-lg items-center mb-16'>
            <img src={Speaker} alt="the combined it siyes"  className=' mx-auto mt-[-3rem]' />
            <h1 className='font-bold text-[20px] py-5'>Speakers</h1>
            <h2 className='text-gray-600 flex items-center'>Shop <span className='text-[orange] text-2xl'><MdKeyboardArrowRight/></span></h2>
        </div>

        <div className='bg-[#f2f2f2] flex flex-col w-[327px] h-[165px] mx-auto rounded-lg items-center mb-16'>
            <img src={airods} alt="the combined it siyes" className=' mx-auto mt-[-3rem]'/>
            <h1 className='font-bold text-[20px] py-5'>Earphones</h1>
            <h2 className='text-gray-600 flex items-center'>Shop <span className='text-[orange] text-2xl'><MdKeyboardArrowRight/></span></h2>
        </div> */
}
