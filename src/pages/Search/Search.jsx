import React, { useState } from 'react'
import products from '../../Data';
import ProductCard from '../../components/ProductCard';
import { useForm } from "react-hook-form";

function Search() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);




  const [search, setSearch] = useState();
  const [sort, setSort] = useState();
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [category, setCategory] = useState();
  const [page, setPage] = useState(1);


  const addToCartHandler = () => {
    console.log("Product added to cart");

  }

  const isPrevPage = page > 1 ;
  const isNextPage = page < 4;
  return (
    <div className=''>
      <div className='container h-screen px-20 py-10 flex flex-row items-start space-x-8'>
        <aside className='w-1/4  bg-gray-50 shadow-lg  h-full p-4'>
          <h1 className=' text-2xl text-left  my-5 font-extralight uppercase'>
            Filters
          </h1>
          <form className=' flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
              <label className='font-semibold text-lg'>Sort</label>
              <select className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("country")}>
                <option defaultValue className='text-gray-50' value="">None</option>
                <option value="asc">Price (Low To High)</option>
                <option value="dsc">Price (Hight To Low)</option>
                <option value="bangladesh">bangladesh</option>
              </select>
            </div>
            <div className='w-full'>
              <label className='font-semibold text-lg'>Max Price : 10000000</label>

              <input
                type='range'
                className='w-full'
                min={100}
                max={10000000}
                value={maxPrice}
                onChange={(e) => { setMaxPrice(e.target.value) }}
              />            </div>
            <div className='flex flex-col'>
              <label className='font-semibold text-lg'>Category</label>
              <select className='border border-gray-600 outline-none py-2  rounded-md px-3' {...register("country")}>
                <option defaultValue className='text-gray-50' value="">All</option>
                <option value="game">game</option>
                <option value="football">football</option>
              </select>
            </div>


          </form>
        </aside >
        <main className='w-3/4'>
          <h1 className='text-4xl text-center  my-5 font-light'>
            Login
          </h1>
          <form className=' my-4' onSubmit={handleSubmit(onSubmit)}>


            <input placeholder='Search ......' type='text' className=' outline-none py-2  rounded-md px-3 w-full' {...register("search",)} />


          </form>
          <div className='w-full  grid grid-cols-3 gap-4'>
            {products?.length > 0 ? products?.map((items, index) => {
              return <ProductCard key={index} name={items.name} photo={items.photo} price={items.price} stock={items.stock} handler={addToCartHandler} />
            }) : <h1 className='text-center text-3xl font-semibold text-red-600'> No Product is Yet Added</h1>}
          </div>
          <div className="space-x-4">
            <button className='outline-none border bg-gray-400  rounded-lg p-2 my-2 ' disabled={!isPrevPage} onClick={()=>setPage((prev)=>prev-1)}>Prev</button>
            <span>page of {page}</span>
            <button className='outline-none border bg-gray-400 rounded-lg p-2 my-2 ' disabled={!isNextPage} onClick={() => setPage((prev) =>  prev + 1 )}>next</button>
          </div >
        </main>

      </div >
    </div>
  )
}

export default Search