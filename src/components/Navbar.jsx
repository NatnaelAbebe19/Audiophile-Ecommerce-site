import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/audiophile.png";
import SingleDevices from "./SingleDevices";
import Cart from "./Cart";
export default function Navbar({setShowCart}) {
  const [shownav, setShownav] = useState(false);
  const [showCarts, setShowCarts] = useState(false); 

  function handleClick() {
    setShownav(prev=>!prev);
  }

  function handleX() {
    setShownav(false);
  }

  function handleCart(){
    setShowCarts(prevState=>!prevState);
  }

  return (
    <div className="flex h-[90px] items-center justify-center bg-black ">
      <nav className="flex w-[80%] max-w-[1110px] items-center justify-between py-7 md:border-b-[1px] text-white">
        <FaBars size={25} className="md:hidden cursor-pointer" onClick={handleClick} />
        <Link to="/"><img src={logo} alt="The logo of the image" /></Link>
        <div>
          <ul className="hidden justify-between md:flex md:w-[320px] lg:w-[430px]">
            <NavLink to="/" className="text-[13px] font-bold uppercase cursor-pointer hover:text-[#D87D4A] active:text-[#D87D4A] ease-in-out duration-300">Home</NavLink>
            <NavLink to="/headphone" className="text-[13px] font-bold uppercase cursor-pointer hover:text-[#D87D4A] active:text-[#D87D4A] ease-in-out duration-300">Headphones</NavLink>
            <NavLink to="/speaker" className="text-[13px] font-bold uppercase cursor-pointer hover:text-[#D87D4A] active:text-[#D87D4A] ease-in-out duration-300">speakers</NavLink>
            <NavLink to="/earphone" className="text-[13px] font-bold uppercase cursor- hover:text-[#D87D4A] active:text-[#D87D4A] ease-in-out duration-300pointer">earphones</NavLink>
          </ul>
        </div>
        <div className="relative">
          <AiOutlineShoppingCart size={30} onClick={handleCart} className="cursor-pointer ease-in-out duration-300"/>
        </div>
        <div
          className={ 
            shownav
              ? "absolute left-0 top-[10%] z-[3232] flex w-[100%] mx-auto h-[100%] flex-col border-r-gray-500 bg-white px-8 duration-700 ease-in-out md:hidden"
              : "absolute top-[-150%]"
          }
        > 
          <div className="mx-auto z-[23222] text-black py-0 my-[-1.8rem] " onClick={handleX}>
            <SingleDevices className="mt-8" lower={2}  />
          </div>  
        </div>
        {showCarts && <div className="absolute w-[90%] top-[100px] right-0"> <Cart /></div>}
      </nav>
    </div>
  );
}
