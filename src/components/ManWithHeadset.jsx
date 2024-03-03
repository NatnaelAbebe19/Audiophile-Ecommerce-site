import React from "react";
import manWith from "../assets/images/manWith.jpg";
export default function ManWithHeadset() {
  return (
    <div className="mx-auto mb-8 flex max-w-[1110px] flex-col overflow-hidden md:h-[500px] md:w-[90%] md:flex-row">
      <div className="order-2 flex flex-grow flex-col items-center justify-center px-12 md:order-1  md:w-[50%] md:items-start">
        <h1 className="pb-8 text-center text-2xl font-bold md:text-left md:text-3xl lg:text-4xl ">
          BRINGING YOU THE <br />
          <span className="text-[#D47B4F]">BEST</span> AUDIO GEAR
        </h1>
        <p className="w-[80%] text-center font-medium leading-6 text-gray-500 md:text-left lg:w-[%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="order-1 mx-auto mb-8 h-[350px] w-[90%] overflow-hidden rounded-lg md:order-2 md:h-auto md:w-[50%]">
        <img
          src={manWith}
          alt="A man with a headset"
          className="h-[100%] w-[100%]"
        />
      </div>
    </div>
  );
}
