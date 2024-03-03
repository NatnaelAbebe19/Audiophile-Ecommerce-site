import React from "react";
import Datas from "./datas/devices";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function SingleDevices() {
  return (
    <div className="mx-auto mt-[5rem] flex w-full max-w-[1110px] flex-col md:mt-[7rem] md:flex-row">
      {Datas.map((Data) => (
        <div className="mx-auto mb-16 flex h-[165px] w-[327px] flex-col items-center rounded-lg bg-[#f2f2f2]">
          <img
            src={Data.imag}
            alt="the combined it siyes"
            className=" mx-auto mt-[-3rem]"
          />
          <h1 className="py-5 text-[20px] font-bold uppercase">{Data.name}</h1>
          <h2 className="flex items-center text-gray-600">
            Shop
            <span className="text-2xl text-[orange]">
              <MdKeyboardArrowRight />
            </span>
          </h2>
        </div>
      ))}
    </div>
  );
}
