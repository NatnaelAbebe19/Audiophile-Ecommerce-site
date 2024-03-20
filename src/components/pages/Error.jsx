import React from 'react'
import { TfiFaceSad } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';


export default function Error() {
  return (
    <div className=' h-[90vh] flex justify-center items-center flex-col gap-y-4'> 
      <TfiFaceSad size={100} className=""/>
      <h1 className='text-6xl'>404</h1>
      <div className='text-3xl max-w-[60&]'>page not found!</div>
      <p className=' max-w-[45%] text-center'>The page you are looking for doesn't exoist or an error has occured, go back, or head over to webbir.com to choose a new direction  </p>
      <NavLink to="/">
            <button className="capitalize mt-4 bg-[#D87D4A] px-6 py-3 hover:bg-[#dd8f62] ease-in-out duration-300 text-[0.9rem] font-bold text-white">
              Back to home
            </button>
          </NavLink>
    </div>
  )
}
