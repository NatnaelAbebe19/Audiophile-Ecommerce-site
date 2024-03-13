import React, {useState, useEffect} from 'react'
import Datas from "../datas/data"
import SingleDevices from '../SingleDevices'
import Man from "../ManWithHeadset";
import {motion} from "framer-motion";
import FadeLoader from "react-spinners/FadeLoader"; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../Action';

const variant1 = {
    initial:{
        opacity: 0,
        x: 100
    }, 
    animate:{
        opacity: 1, 
        x: 0, 
        transition: {delay: 0.14, duration: 0.35},
    }
}
const variant2 = {
    initial:{
        opacity: 0,
        x: -100
    }, 
    animate:{
        opacity: 1, 
        x: 0, 
        transition: {delay: 0.14, duration: 0.35},
    }
}
export default function Earphone() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      }, 1700)
    }, [])
  return (
    <div><div>
    <h1 className="py-12 w-full bg-black text-white mb-8 text-4xl font-bold text-center ">EARPHONES</h1>
</div>
{loading? <div className="h-[90vh] flex justify-center items-center">
        <FadeLoader
          color={"#D87D4A"}
          loading={loading}
          size={30}
        />
      </div>:
<div>
    {Datas.filter(dataa=>dataa.category === "earphone").map((data, index)=>(
        <motion.div
        variants={variant2}
        initial="initial"
        whileInView={"animate"}
        className={`max-w-[1110px] mx-auto flex flex-col md:flex-row justify-center  gap-12  mb-12 items-center`}>
            <div className={`mx-auto w-[95%] md:mx-0 md:w-[50%]  md:${index % 2 === 0 ? 'order-1' : 'order-2'}` }>
                <img src={data.image} alt={data.name} className="w-[100%]"/>
            </div>
            <motion.div                     
            variants={variant1}                       
            initial="initial"
            whileInView={"animate"}
            className={`md:w-[50%]  md:${index % 2 === 0 ? 'order-2' : 'order-1'}  flex flex-col items-center md:items-start`}>
                <p className={`tracking-[5px] text-[#D87D4A]`}>NEW PRODUCT</p>
                <h1 className="text-3xl font-bold text-center my-4">{data.name}</h1>
                <p className='w-[85%] text-center md:text-left mx-auto md:mx-0 text-gray-500'>{data.description}</p>
                <button onClick={()=>{dispatch(addToCart({name: data.cartName, image:data.image, price:data.price, id:data.id, quantity: data.quantity}))}} className="mt-4 bg-[#D87D4A] mx-auto md:mx-0 px-6 py-3 hover:bg-[#dd8f62] ease-in-out duration-300 text-[0.9rem] font-bold text-white">
                  SEE PRODUCT
                </button>
            </motion.div>
        </motion.div>
    ))}
</div>}
<SingleDevices />
<Man /></div>
  )
}
