import React, {useState} from 'react'
import ZX9 from "../assets/images/ZX9big.png"
import { connect } from 'react-redux';

// export default function Cart() {
const Cart = ({cartItems})=>{
    // const [added, setAdded] = useState(0);
    const added = cartItems.length;
    console.log(cartItems);
    return (
    <div className='absolute w-[330px] md:w-[380px] sm:translate-x-[85%] translate-x-[45%] md:translate-x-[80%] min-[1200px]:translate-x-[113%] lg:translate-x-[95%] xl:translate-x-[120%] h-[450px] right-[50%] min-[1400px]:translate-x-[129%] p-6 rounded-md text-black bg-slate-100 z-[121223] lg:max-w-[900px]'>
        <div className='max-w-[710px]'>
            <div className='flex font-bold justify-between p-2'>
                <h1 className=''>CART(<span>{added}</span>)</h1>
                <span className='underline cursor-pointer'>Remove all</span>
            </div>
        <div className='shadow-inset overflow-auto scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-500 hover:scrollbar-track-gray-200 h-[280px]'>
            {cartItems.map(items=>(
            <div className='flex border-b-2 justify-between py-3 items-center px-3'>
                <div className="w-[2.7rem]"><img src={items.image} alt="The image of the product" className='w-full' /></div>
                <div>{items.name} <br /> ${items.price} </div>
                <div className='bg-gray-300 w-[30%] flex justify-around'><span className="cursor-pointer">-</span> 1 <span className="cursor-pointer">+</span></div>
            </div>))}
        </div>
        <div className="flex justify-between py-2 text-xl">
            <h1>Total</h1>
            <p className="font-bold">$13,998</p>
        </div>
        <div className='flex justify-center'>
        <button className="rounded-md mx-auto w-full bg-[#D87D4A] px-10 py-3 hover:bg-[#dd8f62] ease-in-out duration-300 text-[1rem] font-bold text-white">
            Checkout
          </button>
        </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) =>({
    cartItems: state.cartItems, 
});
export default connect(mapStateToProps)(Cart);
