import React from "react";
import audiophile from "../assets/images/audiophile.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane ,FaLinkedinIn } from "react-icons/fa";


export default function Footer() {

  function handleFacebook(){
    window.open("https://www.facebook.com/natty.minilik", "_blank");
  }

  const handleLinkedin = ()=>{
    window.open("https://www.linkedin.com/in/natnael-abebe-57a079295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
  }
  const handleInstagram = ()=>{
    window.open("https://instagram.com/nathaniel_abebe", "_blank");
  }
  const handleTelegram = ()=>{
    window.open("https://t.me/NatnaelAbebe", "_blank");
  }
  return (
    <div className="w-full bg-[#111011] ">
      <footer className="grid max-w-[1110px] pb-8 grid-cols-1 md:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <NavLink to="/">
            <img
              src={audiophile}
              alt="the logo of the image"
              className="border-spacing-8 border-t-4 border-t-[#D87D4A] px-4 py-8 cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="flex flex-col px-4 pb-4 text-center md:flex-row md:pt-[40px]">
          <ul className="justify-between text-white md:flex md:w-[420px] lg:w-[530px]">
            <NavLink to="/">
              <li className="pb-4 text-[13px] font-bold uppercase cursor-pointer active:text-[#D87D4A] focus:text-[#d87d4a] hover:text-[#D87D4A] ease-in-out duration-500">Home</li>
            </NavLink>
            <NavLink to="/headphone">
              <li className="pb-4 text-[13px] font-bold uppercase cursor-pointer active:text-[#D87D4A] focus:text-[#d87d4a] hover:text-[#D87D4A] ease-in-out duration-500">Headphones</li>
            </NavLink>
            <NavLink to="/speaker">
              <li className="pb-4 text-[13px] font-bold uppercase cursor-pointer active:text-[#D87D4A] focus:text-[#d87d4a] hover:text-[#D87D4A] ease-in-out duration-500">speakers</li>
            </NavLink>
            <NavLink to="/earphone">
              <li className="pb-4 text-[13px] font-bold uppercase cursor-pointer active:text-[#D87D4A] focus:text-[#d87d4a] hover:text-[#D87D4A] ease-in-out duration-500">earphones</li>
            </NavLink>
          </ul>
        </div>
        <p className="px-4 text-center text-[#6f848d97] md:text-left w-[70%] mx-auto">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week. <br />
          <br />
          <span className="text-[#6f848d97]">
            Copyright 2024. All right reserved. <span className="text-white hover:text-[#D87D4A] ease-in-out duration-500"><a href="https://t.me/NatnaelAbebe" target="_blank">@Natnaels</a></span>
          </span>
        </p>
        <div className="md:ml-auto mx-auto md:mx-0 flex gap-4 p-4 md:my-auto text-white md:text-left">
          <AiFillFacebook size={30} onClick={handleFacebook} className="cursor-pointer hover:scale-125 ease-in-out duration-500 "/>
          <FaLinkedinIn size={30} onClick={handleLinkedin} className="cursor-pointer hover:scale-125 ease-in-out duration-500 " />
          <AiOutlineInstagram size={30} onClick={handleInstagram} className="cursor-pointer hover:scale-125 ease-in-out duration-500 "/>
          <FaTelegramPlane size={30} onClick={handleTelegram} className="cursor-pointer hover:scale-125 ease-in-out duration-500 "/>
        </div>
      </footer>
    </div>
  );
}
