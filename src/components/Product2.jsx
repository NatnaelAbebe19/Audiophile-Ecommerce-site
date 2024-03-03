import React from "react";
import ZX7 from "../assets/images/ZX7.png";

export default function Product2() {
  return (
    <div className="relative mx-auto mb-12 w-[90%] max-w-[1110px] overflow-hidden rounded-lg">
      <div className="jsutify-center absolute left-4 top-[33%] flex flex-col items-center md:left-[10%]">
        <h1 className="fonts-bold text-2xl text-black md:text-3xl">
          ZX7 Speaker
        </h1>
        <button className="mt-4 border hover:bg-[#000] hover:text-white ease-in-out duration-300 border-stone-950 bg-transparent px-6 py-3 text-[0.9rem] font-bold text-black">
          SEE PRODUCT
        </button>
      </div>
      <div className="h-[300px] w-[100%] max-w-[1110px] ">
        <img
          src={ZX7}
          alt="ZX7 speaker"
          className="h-[100%] w-[100%] rounded-lg"
        />
      </div>
    </div>
  );
}
