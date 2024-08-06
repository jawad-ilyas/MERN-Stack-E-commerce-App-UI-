import React from 'react'
import { useForm } from "react-hook-form";

function Shipping() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container  px-20 py-10'>
            <div className='max-w-md mx-auto'>
                <h1 className='text-4xl text-center  my-5 font-semibold'>Shipping Address </h1>
                <form className=' flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='First Name' className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("firstName", { required: true, maxLength: 20 })} />
                    <input type='email' placeholder='Enter Your Email' className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("email", { required: true, maxLength: 20 })} />
                    <input placeholder='Last Name' className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    <input placeholder='Address ' className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("address", { pattern: /^[A-Za-z]+$/i })} />
                    <input placeholder='City ' className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("city", { pattern: /^[A-Za-z]+$/i })} />
                    <input placeholder='State ' className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("state", { pattern: /^[A-Za-z]+$/i })} />
                    <select   className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("country")}>
                        <option defaultValue  className='text-gray-50' value="">Select Your Country</option>
                        <option value="pakistan">pakistan</option>
                        <option value="india">india</option>
                        <option value="bangladesh">bangladesh</option>
                    </select>
                    
                    <input placeholder='Pin Code ' type='number' className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("pincode",)} />

                    <input type="submit" className='border border-gray-600 outline-none py-2  rounded-md px-3 bg-gray-900 text-white cursor-pointer' />
                </form>
            </div>


        </div>
    )
}

export default Shipping