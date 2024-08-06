import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function CartItems({ productId, photo, name, price, stock, handler }) {
    // let quanity = 4;
    const [quantity, setQuantity] = useState(4)
    let newQuanity = 0;
    const handleDecrementQuantity = (quantity) => {
        let newQuanity;
        if (quantity != 0) {
            newQuanity = quantity - 1;
        }
        else {
            newQuanity = 0;

        }
        setQuantity(newQuanity)
    }
    
    const handleIncrementQuantity = (quantity) => {
        let newQuanity;
   
            newQuanity = quantity + 1;
      
      
        setQuantity(newQuanity)
    }
    return (
        <div className="flex flex-row my-4  bg-gray-50 shadow-lg hover:shadow-2xl justify-between p-5 items-center  rounded-lg ">
            <div className='flex flex-row '>
                <img className="size-20 object-cover rounded-lg " src={`${photo}`} alt={name} />
                <article className="flex flex-col ms-4 justify-center items-start font-semibold ">
                    <Link to={`/product/${productId}`} className="font-bold text-2xl capitalize  ">{name}</Link>
                    <span>Rs {price}</span>
                </article>
            </div>
            <div className='flex items-center space-x-3 justify-center'>
                <div className='flex items-center space-x-4'>
                    <button onClick={() => handleDecrementQuantity(quantity)} className='bg-gray-300  py-1 px-3 rounded-lg'>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => handleIncrementQuantity(quantity)} className='bg-gray-300  py-1 px-3 rounded-lg'>+</button>
                </div>
                <FaTrash className='hover:text-red-600 cursor-pointer' />
            </div>

        </div>
    )
}

export default CartItems