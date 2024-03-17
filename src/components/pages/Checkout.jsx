import React from 'react'
import cash from "../../assets/images/cash-icon.4d83fcbc.svg"
export default function Checkout() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100">
        <div className='w-[95%] shadow-slate-600 m-4 rounded-md bg-[#fff] px-4 py-6 '>
            <h1 className='font-bold text-3xl my-4'>CHECKOUT</h1>
            <p className='uppercase text-[#D87D4A] font-[600] my-6'>Billing details</p>
            <div>
                <div className="flex flex-col ">
                    <label htmlFor="name" className='font-bold text-[md] my-2' >Name</label>
                    <input type='text' name='name' className='w-full border-2 p-4 rounded-xl'/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email"  className='font-bold text-[md] my-2'>Email address</label>
                    <input type="text" name='email' className='w-full border-2 p-4 rounded-xl'/>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone"   className='font-bold text-[md] my-2'>Phone Number</label>
                <input type="tel" placeholder='+1 202-555-0136' name='phone'  className='w-full border-2 p-4 rounded-xl'/>
            </div>
            <p className='uppercase text-[#D87D4A] font-[600] my-6'>Shipping info</p>
            <div className="flex flex-col">
                <label htmlFor="address" className='font-bold text-[md] my-2'>Address</label>
                <input type="text" placeholder='1137 williams avenue'  name='address'  className='w-full border-2 p-4 rounded-xl'/><br/>
            </div>
            <div>
                <div>
                    <label htmlFor="zipCode" className='font-bold text-[md] my-2'>ZIP Code</label>
                    <input type="text" name='zipCode'  className='w-full border-2 p-4 rounded-xl'/>
                </div>
                <div>
                    <label htmlFor="city" className='font-bold text-[md] my-2'>City</label>
                    <input type="text" name='city' placeholder='New York'  className='w-full border-2 p-4 rounded-xl'/>
                </div>
            </div>
            <div>
                <label htmlFor="country" className='font-bold text-[md] my-2'>Country</label>
                <input type="text" name='country' placeholder='United States'  className='w-full border-2 p-4 rounded-xl'/>
            </div>
            <p className='uppercase text-[#D87D4A] my-4 font-[600]'>Payment details</p>
            <div>
                <p className="my-6 font-bold text-md">Payment Method</p>
                <div className='flex flex-col gap-y-4 mb-4 items-center'>
                    <div className="flex w-full gap-x-4 border-2 p-3 rounded-xl">
                        <input type='radio' id='creditCard1' name='cash'  className='w-5 bg-[#D87D4A]'/>
                        <label htmlFor="e-Money" className='font-bold text-[md] my-2'>e-Money</label>
                    </div>
                    <div className="flex w-full border-2 p-3 gap-x-4 rounded-xl">
                        <input type='radio' id='creditCard2' name='cash'  className='w-5'/>
                        <label htmlFor="e-Money" className='font-bold text-[md] my-2'>Cash on delivery</label>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-6 '>
                <div className="w-[300px] flex justify-center items-center"><img src={cash} className='w-full' alt="" /></div>
                <p className='text-slate-500'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
            <div>
                <div>
                    <label htmlFor="eMoneyNum">e-Money Number</label>
                    <input type="text" placeholder='238521993'/>
                </div>
                <div>
                    <label htmlFor='eMoneyPin'>e-Money PIN</label>
                    <input type="text"  placeholder='0674'/>
                </div>
            </div>
        </div>
        <div>
            <h2>Summary</h2>
            <div>
                <img src="" alt="" />
                <div>XX99 <br /> $2, 999</div> 
                <div>x1</div>
            </div>
            <div>
                <h2>TOTAL </h2>
                <p>$2,999</p>
            </div>
            <div>
                <h2>SHIPPING</h2>
                <p>$50</p>
            </div>
            <div>
                <h2>VAT(INCLUDED)</h2>
                <p>$600</p>
            </div>
            <div>
                <h2>GRAND TOTAL</h2>
                <p>$3,049</p>
            </div>
             <button className="mt-4 bg-[#D87D4A] px-6 py-3 hover:bg-[#dd8f62] ease-in-out duration-300 text-[0.9rem] font-bold text-white">
              CONtINUE AND PAY
            </button>
        </div>

    </div>
  )
}
