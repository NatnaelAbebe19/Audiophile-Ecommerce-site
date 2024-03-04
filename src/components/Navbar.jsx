import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/audiophile.png";

export default function Navbar() {
  const [shownav, setShownav] = useState(false);
  function handleClick() {
    setShownav(true);
  }
  function handleX() {
    setShownav(false);
  }
 
  return (
    <div className="flex h-[90px] items-center justify-center bg-black text-white ">
      <nav className="flex w-[80%] max-w-[1110px] items-center justify-between py-7 md:border-b-[1px] ">
        <FaBars size={25} className="md:hidden cursor-pointer" onClick={handleClick} />
        <Link to="/"><img src={logo} alt="The logo of the image" /></Link>
        <div>
          <ul className="hidden justify-between md:flex md:w-[320px] lg:w-[430px]">
            <NavLink to="/" className="text-[13px] font-bold uppercase cursor-pointer hover:text-[#D87D4A] active:text-[#D87D4A] ease-in-out duration-300">Home</NavLink>
            <NavLink to="/headphone" className="text-[13px] font-bold uppercase cursor-pointer hover:text-[#D87D4A] active:text-[#D87D4A] ease-in-out duration-300">Headphones</NavLink>
            <NavLink to="/speakers" className="text-[13px] font-bold uppercase cursor-pointer hover:text-[#D87D4A] active:text-[#D87D4A] ease-in-out duration-300">speakers</NavLink>
            <NavLink to="/earphones" className="text-[13px] font-bold uppercase cursor- hover:text-[#D87D4A] active:text-[#D87D4A] ease-in-out duration-300pointer">earphones</NavLink>
          </ul>
        </div>
        <AiOutlineShoppingCart size={30} />
        <div
          className={
            shownav
              ? "fixed left-0 top-0 z-[3232] flex h-[88vh] w-[65%] flex-col border-r border-r-gray-500 bg-black px-8  py-9 duration-700 ease-in-out md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <div className="h-[70px]">
            <Link to="/">
              <img src={logo} alt="the logo of the image" onClick={handleX} className="mt-[-1px]" />
              <MdOutlineClose
                size={30}
                onClick={handleX}
                className="absolute right-4 top-8 text-white hover:bg-slate-400 ease-in-out duration-500 rounded"
              />
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            <NavLink to="/" onClick={handleX} className="cursor-pointer border-b pb-2 font-bold uppercase">
              Home
            </NavLink>
            <NavLink to="/headphone" onClick={handleX} className="cursor-pointer border-b pb-2 pt-3 font-bold uppercase">
              Headphones
            </NavLink>
            <NavLink onClick={handleX} to="/speakers" className="cursor-pointer border-b pb-2 pt-3 font-bold uppercase">
              speakers
            </NavLink>
            <NavLink to="/earphones" onClick={handleX} className="cursor-pointer border-b pb-2 pt-3 font-bold uppercase">
              earphones
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}
