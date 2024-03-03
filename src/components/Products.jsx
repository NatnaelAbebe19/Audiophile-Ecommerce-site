import React from "react";
import Speaker from "../assets/images/image-removebg-preview(38).png";
export default function Products() {
  return (
    <div className="lg:w-[90%]s mx-auto mb-12 flex w-[90%] max-w-[1110px] flex-col items-center justify-center rounded-lg bg-[#D97E4A] py-12 text-center md:w-[90%] md:flex-row md:justify-around md:text-left">
      <div className="w-[13rem] pb-10 md:w-[15rem] md:pb-0">
        <img src={Speaker} alt="Speaker" className="w-[100%]" />
      </div>
      <div className="flex flex-col items-center justify-center md:items-start">
        <h1 className=" mb-4 mt-2 text-4xl font-bold text-white md:text-4xl">
          ZX9 <br />
          SPEAKER
        </h1>
        <p className="max-w-[400px] px-4 text-gray-200 md:text-[1.2rem]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound
        </p>
        <button className="mt-4 bg-[#000] px-6 py-3 text-[0.9rem] font-bold text-white">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
//#D87C49