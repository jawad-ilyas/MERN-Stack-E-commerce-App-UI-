import { FaPlus } from "react-icons/fa";

const server = "jawadilyas";
function ProductCard({ productId, photo, name, price, stock, handler }) {
  return (
    <div className="relative group bg-gray-200 p-4 space-y-1 rounded-lg ">
      <img className="h-60 w-full object-cover rounded-lg " src={`${photo}`} alt={name} />
      <p className="font-bold text-2xl capitalize ">{name}</p>
      <div className="flex flex-row justify-between items-center font-semibold ">
        <span>Rs {price}</span>
        <span>Stock {stock}</span>
      </div>
      <div className="absolute  inset-0 bg-gray-500/50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-gray-700 p-5 rounded-full hover:rotate-12 text-white" onClick={handler}><FaPlus /></button>

      </div>
    </div>
  )
}

export default ProductCard