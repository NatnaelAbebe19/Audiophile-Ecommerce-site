import React from 'react'
import Datas from "../datas/headphoneData"
import SingleDevices from '../SingleDevices'
import Man from "../ManWithHeadset";


export default function Headphones() {
  return (
    <div className=''>
        <div>
            <h1 className="py-12 w-full bg-black text-white mb-8 text-4xl font-bold text-center ">HEADPHONE</h1>
        </div>
        {Datas.map((data, index)=>(
            <div className={`max-w-[1110px] mx-auto flex flex-col md:flex-row justify-center  gap-12  mb-12 items-center`}>
                <div className={`mx-auto w-[95%] md:mx-0 md:w-[50%]  ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <img src={data.image} alt={data.name} className="w-[100%]"/>
                </div>
                <div className={`md:w-[50%]  ${index % 2 === 0 ? 'order-2' : 'order-1'}  flex flex-col items-center md:items-start`}>
                    <h1 className="text-3xl font-bold text-center my-4">{data.name}</h1>
                    <p className='w-[85%] text-center md:text-left mx-auto md:mx-0 text-gray-500'>{data.description}</p>
                    <button className="mt-4 bg-[#D87D4A] mx-auto md:mx-0 px-6 py-3 hover:bg-[#dd8f62] ease-in-out duration-300 text-[0.9rem] font-bold text-white">
            SEE PRODUCT
          </button>
                </div>
            </div>
        ))}
        <SingleDevices />
        <Man />
    </div>
  )
}
