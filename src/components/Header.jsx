import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
// ! ADD FOR THE TESTING PURPOSE
const user = { _id: "21212", role: "admin" }
function Header() {


    // * use for the open dialog box 
    const [isOpen, setIsOpen] = useState(false);

    // * use for the handle logout functionality of the user
    const logoutHandler = () => {
        setIsOpen((false))
    }
    return (
        <div className=" bg-yellow-500 sticky top-0 inset-0 z-[100000000] shadow-xl ">
            <div className="container flex px-20 py-4   space-x-4 items-center justify-between">
                <div>
                    <Link className="text-white font-semibold text-xl hover:text-white/70" onClick={() => setIsOpen(false)} to="/"><img className="size-16  mix-blend-multiply rounded-full" src={logo} /></Link>

                </div>

                <div className="space-x-4 font-serif">
                    <Link className="text-white font-semibold text-xl hover:text-white/70" onClick={() => setIsOpen(false)} to="/">Home</Link>
                    <Link className="text-white font-semibold text-xl hover:text-white/70" onClick={() => setIsOpen(false)} to="/menu">Menu</Link>
                    <Link className="text-white font-semibold text-xl hover:text-white/70" onClick={() => setIsOpen(false)} to="/about">About</Link>
                    <Link className="text-white font-semibold text-xl hover:text-white/70" onClick={() => setIsOpen(false)} to="/contact">Contact</Link>
                </div>

                <div className="flex space-x-1  items-center justify-center">
                    <Link onClick={() => setIsOpen(false)} to="/search"><FaSearch /></Link>

                    <Link onClick={() => setIsOpen(false)} to="/cart"><FaShoppingBag /></Link>



                    {
                        user?._id ?
                            <div >
                                <button onClick={() => setIsOpen((prev) => !prev)}><FaUser /></button>
                                {/* Dialog tag is used like this model or component is open or not  */}
                                <dialog className=" " open={isOpen}>
                                    <div>
                                        {user.role === "admin" && <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">Admin</Link>}
                                    </div>
                                    <Link onClick={logoutHandler} to="/orders">Orders</Link>
                                    <button><FaSignOutAlt /></button>
                                </dialog>
                            </div>
                            :
                            <Link to="/login"><FaSignInAlt /></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header