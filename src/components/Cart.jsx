import React, {useState} from 'react'
import { connect } from 'react-redux';

const Cart = ({cartItems})=>{
    const added = cartItems.length;
    let total = 0;
    let count = 0;
const handleRemove = ()=>{
    cartItems.length = 0;
    }

    // for(let i=0; i<added;i++){
    //     total += cartItems[i].price * item.quantity;
    // }

    cartItems.forEach((item, index)=>{
        total+=(item.price*item.quantity);
    });
  

    function handleAddCart(items){
        // items.quantity++;
    }

    return (
    <div className='absolute w-[330px] md:w-[380px] sm:translate-x-[85%] translate-x-[45%] md:translate-x-[80%] min-[1200px]:translate-x-[113%] lg:translate-x-[95%] xl:translate-x-[120%] h-[450px] right-[50%] min-[1400px]:translate-x-[129%] py-4 px-4 rounded-md text-black bg-slate-100 z-[121223] lg:max-w-[900px]'>
        <div className='max-w-[710px]'>
            <div className='flex font-bold justify-between p-2'>
                <h1 className=''>CART(<span>{added}</span>)</h1>
                <span onClick={handleRemove} className='underline cursor-pointer text-gray-500 hover:text-gray-400 ease-in-out duration-300'>Remove all</span>
            </div>
        <div className='shadow-inset overflow-auto scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-500 hover:scrollbar-track-gray-200 h-[280px]'>
            {added === 0? 
             <div className='flex justify-center items-center text-gray-500 h-[90%] text-center px-4'>"Oops! It seems your cart is empty. No worries, we've got plenty to offer. Start adding items now</div> :
                <div>
                    {cartItems.map(items=>(
                        // {const itemIndex = cartItems.findIndex((cartItem)=>cartItem.id === items.id);}
                    <div key={items.id} className='flex border-b-2 justify-between py-3 items-center px-3'>
                    <div className="w-[2.7rem]"><img src={items.image} alt="The image of the product" className='w-full' /></div>
                    <div><span className='font-bold'>{items.name}</span> <br /> ${items.price} </div>
                    <div className='bg-gray-300 w-[30%] flex justify-around'><span className="cursor-pointer">-</span> {items.quantity} <span className="cursor-pointer">+</span></div>
                </div>))}
            </div>
                }
        </div>
        <div className="flex justify-between py-2 text-xl">
            <h1>Total</h1>
            <p className="font-bold">${total}</p>
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
