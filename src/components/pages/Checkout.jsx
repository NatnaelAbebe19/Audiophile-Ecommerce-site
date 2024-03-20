import React, { useState } from 'react'
import cash from "../../assets/images/cash-icon.4d83fcbc.svg"
import sample from "../../assets/images/XX99.jpg"
import { connect } from 'react-redux';
const Checkout = ({cartItems})=> {
    
    const [selectedOption, setSelectedOption] = useState("option2");
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    let total = 0;

    cartItems.forEach((item, index)=>{
        total+=(item.price*item.quantity);
    });

    const handlePay= ()=>{
        window.location.href = `tel:*889#`;
    }

    const VAT = total*0.2;
    // console.log(cartItems);

  return (
  <div className="bg-slate-100">
    <div className="flex flex-col lg:flex-row bg-slate-100  items-center lg:items-start max-w-[1120px] mx-auto ">
        <div className='w-[95%] shadow-slate-600 m-4 rounded-md bg-[#fff] px-4 py-6 lg:w-[60%] lg:mb-16'>
            <h1 className='font-bold text-3xl my-4'>CHECKOUT</h1>
            <p className='uppercase text-[#D87D4A] font-[600] my-6'>Billing details</p>
            <div className='flex justify-between gap-x-4 flex-col md:flex-row'>
                <div className="flex flex-col w-full md:w-[50%]">
                    <label htmlFor="name" className='font-bold text-[md] my-3' >Name</label>
                    <input type='text' name='name' className='w-full border-2 p-4 rounded-xl' placeholder="Natnael Abebe"/>
                </div>
                <div className="flex flex-col md:w-[50%]">
                    <label htmlFor="email"  className='font-bold text-[md] my-3'>Email address</label>
                    <input type="text" name='email' className='w-full border-2 p-4 rounded-xl' placeholder="nati@gmail.com"/>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-[50%]">
                <label htmlFor="phone"   className='font-bold text-[md] my-3'>Phone Number</label>
                <input type="tel" placeholder='+1 202-555-0136' name='phone'  className='w-full border-2 p-4 rounded-xl'/>
            </div>
            <p className='uppercase text-[#D87D4A] font-[600] my-6'>Shipping info</p>
            <div className="flex flex-col">
                <label htmlFor="address" className='font-bold text-[md] my-3'>Address</label>
                <input type="text" placeholder='1137 williams avenue'  name='address'  className='w-full border-2 p-4 rounded-xl'/><br/>
            </div>
            <div className='flex justify-between gap-x-4 flex-col md:flex-row'>
                <div className="mb-4 w-full md:w-[50%]">
                    <label htmlFor="zipCode" className='font-bold text-[md] mb-4'>ZIP Code</label>
                    <input type="text" name='zipCode'  className='w-full border-2 p-4 rounded-xl' placeholder='10001'/>
                </div>
                <div className="mb-4 w-full md:w-[50%]">
                    <label htmlFor="city" className='font-bold text-[md] mb-4'>City</label>
                    <input type="text" name='city' placeholder='New York'  className='w-full border-2 p-4 rounded-xl'/>
                </div>
            </div>
            <div className='w-full md:w-[50%]'>
                <label htmlFor="country" className='font-bold text-[md] my-3 '>Country</label>
                <input type="text" name='country' placeholder='United States'  className='w-full border-2 p-4 rounded-xl'/>
            </div>
            <p className='uppercase text-[#D87D4A] my-4 font-[600]'>Payment details</p>
            <div className='flex flex-col justify-between md:flex-row'>
                <p className="my-6 font-bold text-md w-full md:w-[50%]">Payment Method</p>
                <div className='flex flex-col gap-y-4 mb-6 items-center w-full md:w-[50%]'>
                    <div className="flex w-full gap-x-4 border-2 p-2 rounded-xl">
                        <input type='radio' id='creditCard1' name='cash'  className='w-5 bg-[#D87D4A]' value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange}/>
                        <label htmlFor="e-Money" className='font-bold text-[md] my-3'>e-Money</label>
                    </div>
                    <div className="flex w-full border-2 p-2 gap-x-4 rounded-xl">
                        <input type='radio' style={{ '--radio-color': '#D87D4A' }} id='creditCard2' name='cash'  className='w-5 bg-[#D87D4A]' value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange}/>
                        <label htmlFor="e-Money" className='font-bold text-[md] my-3'>Cash on delivery</label>
                    </div>
                </div>
            </div>
            {selectedOption === 'option1' && <div className='flex gap-x-8 items-center'>
                <img src={cash} className='w-[48px] h-[48px]' alt="" />
                <p className='text-slate-500'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>}
            {selectedOption === 'option2' && <div className='flex flex-col md:flex-row gap-x-4'>
                <div className='mt-6 w-full md:w-[50%]'>
                    <label htmlFor="eMoneyNum" className='font-bold text-md mb-3'>e-Money Number</label>
                    <input type="text" placeholder='238521993' className='w-full border-2 p-4 rounded-xl'/>
                </div>
                <div className='mt-6 w-full md:w-[50%]'>
                    <label htmlFor='eMoneyPin'  className='font-bold text-md mb-3'>e-Money PIN</label>
                    <input type="text"  placeholder='0674' className='w-full border-2 p-4 rounded-xl'/>
                </div>
            </div>}
        </div>
        <div className='w-[95%] shadow-slate-600 m-4 rounded-md bg-[#fff] px-6 py-6 mb-20  lg:w-[40%]'>
            <h2 className="text-2xl font-bold py-4">Summary</h2>
            <div className="flex flex-col">
                <div>
                    {cartItems.map(items=>(
                    <div className="flex justify-between my-5">
                        <div className="flex gap-x-5">
                            <div className='flex w-[60px]'><img src={items.image} alt="" className='w-full'/></div>
                            <div className="font-bold">{items.name} <br /> <span className='font-medium'>${items.price}</span></div>
                        </div>
                        <div>x{items.quantity}</div>
                    </div>))
                    }
                </div>
                <div className="flex justify-between">
                    <h2 className='text-gray-500 my-2'>TOTAL </h2>
                    <p className='font-bold text-xl'>${total}</p>
                </div>
                <div className="flex justify-between">
                    <h2 className='text-gray-500 my-2'>SHIPPING</h2>
                    <p className='font-bold  text-xl'>$50</p>
                </div>
                <div className="flex justify-between">
                    <h2 className='text-gray-500 my-2'>VAT(INCLUDED)</h2>
                    <p className='font-bold  text-xl'>${VAT}</p>
                </div>
                <div className="flex justify-between mt-4">
                    <h2 className='text-gray-500 my-2'>GRAND TOTAL</h2>
                    <p className='font-bold  text-xl'>${total+VAT+50}</p>
                </div>
            </div>
            <button className="mt-4 w-[100%] bg-[#D87D4A] px-6 py-3 hover:bg-[#dd8f62] ease-in-out duration-300 text-[0.9rem] font-bold text-white" onClick={handlePay}>
                CONTINUE AND PAY
            </button>
        </div>
    </div>
    </div>
  )
}


const mapStateToProps = (state) =>({
    cartItems: state.cartItems, 
});

export default connect(mapStateToProps)(Checkout);
