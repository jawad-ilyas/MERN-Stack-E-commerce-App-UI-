import React from 'react'
import HeroSection from './HeroSection'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import products from '../../Data'
function Home() {

  const addToCartHandler = () => {
    console.log("Product added to cart");

  }
  return (
    <div className='container px-20 py-10'>
      <HeroSection />
      <div className='flex justify-between  py-8 items-center'>
        <h1 className='text-black text-3xl font-semibold font-mono '>Our Products</h1>
        <Link className='text-black text-3xl font-semibold font-mono ' to="/search">More </Link>
      </div>
      <main className='grid grid-cols-3 gap-4 '>
        {products?.map((items)=>(
          <ProductCard key={items.productId} name={items.name} photo={items.photo} price={items.price} stock={items.stock} handler={addToCartHandler}/>
        ))}
      </main>
    </div>
  )
}

export default Home