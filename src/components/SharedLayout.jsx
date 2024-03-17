import React, {useState} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom"
import Cart from './Cart';


export default function SharedLayout() {
  const [showCart, setShowCart] = useState(false); 

  return (
    <div className='overflow-hidden'>
        <Navbar />
        <Outlet />    
        <Footer />    
    </div>
  )
}
