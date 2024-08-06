import React, { useState, useEffect } from 'react'
import { VscError } from 'react-icons/vsc';
import CartItems from '../../components/CartItems';
import products from '../../Data';
function Cart() {
  const subtotal = 12212;
  const tax = Math.round(subtotal * 0.18)
  const shippingCharges = 200;
  const discount = 3000;
  const total = subtotal + tax + shippingCharges - discount;


  const [couponCode, setCouponCode] = useState("");
  const [isValidcouponCode, setIsValidCouponCode] = useState(false);
  const isValidCOUPON = "1212"
  const cartItem = [{}];
  useEffect(() => {

    const timeOutId = setTimeout(() => {
      if (couponCode == isValidCOUPON) {
        setIsValidCouponCode(true)
      }
      else {
        setIsValidCouponCode(false)
      }

    }, 1000);

    return () => {
      clearTimeout(timeOutId)
      setIsValidCouponCode(false)
    }
  }, [couponCode])

  const products1 = [];
  return (
    <div className='container px-20 py-10 flex flex-row items-start space-x-8'>
      <main className='w-3/4 '>
        {products?.length > 0 ? products?.map((items, index) => {
          return <CartItems key={index} name={items.name} photo={items.photo} price={items.price} stock={items.stock} />
        }) : <h1 className='text-center text-3xl font-semibold text-red-600'> No Product is Yet Added</h1>}
      </main>
      <aside className='w-1/4  bg-gray-50 shadow-lg  h-full p-4'>
        <p className='capitalize text-xl space-x-1 '><span className='font-semibold '>Subtotal</span> : {subtotal}</p>
        <p className='capitalize text-xl space-x-1'><span className='font-semibold'>tax</span> : {tax}</p>
        <p className='capitalize text-xl space-x-1'><span className='font-semibold'>shippingCharges</span> :{shippingCharges}</p>
        <p className='capitalize text-xl space-x-1 text-red-400'><span className='font-semibold text-black'>discount</span> :  <em>{discount}</em></p>
        <p className='capitalize text-xl space-x-1 '><span className='font-semibold'>total</span> : {total}</p>
        <input className='outline-none border border-gray-500 p-2 my-2 ' placeholder='Coupon Code' type='text' value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
        {couponCode && (isValidcouponCode ? <span>{discount} off using the <code>{couponCode}</code></span> : <span>Coupon Code is Invalid <VscError /></span>)}
        <button className='w-full bg-gray-600 text-white py-2 mt-2 px-3 hover:opacity-70'>Apply Coupon</button>
      </aside >
    </div >
  )
}

export default Cart