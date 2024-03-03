import React from "react";
import audiophile from "../assets/images/audiophile.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import {} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full bg-[#111011] ">
      <footer className="grid max-w-[1110px] pb-8 grid-cols-1 md:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <img
            src={audiophile}
            alt=""
            className="border-spacing-8 border-t-4 border-t-[#D87D4A] px-4 py-8"
          />
        </div>
        <div className="flex flex-col px-4 pb-4 text-center md:flex-row md:pt-[40px]">
          <ul className="justify-between text-white md:flex md:w-[420px] lg:w-[530px]">
            <li className="pb-4 text-[13px] font-bold uppercase cursor-pointer">Home</li>
            <li className="pb-4 text-[13px] font-bold uppercase cursor-pointer">Headphones</li>
            <li className="pb-4 text-[13px] font-bold uppercase cursor-pointer">speakers</li>
            <li className="pb-4 text-[13px] font-bold uppercase cursor-pointer">earphones</li>
          </ul>
        </div>
        <p className="px-4 text-center text-[#6f848d97] md:text-left w-[70%] mx-auto">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week. <br />
          <br />
          <span className="text-[#6f848d97]">
            Copyright 2024. All right reserved.
          </span>
        </p>
        <div className="md:ml-auto mx-auto md:mx-0 flex gap-4 p-4 md:my-auto text-white md:text-left">
          <AiFillFacebook size={30}/>
          <AiOutlineTwitter size={30} />
          <AiOutlineInstagram size={30}/>
        </div>
      </footer>
    </div>
  );
}
