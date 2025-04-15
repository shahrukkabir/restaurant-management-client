import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const navLinkStyle = ({ isActive }) =>
        isActive ? "text-yellow-400" : "hover:text-yellow-400";

    return (
        <div className="fixed w-full z-10 bg-opacity-30 max-w-7xl bg-black text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <span className="block leading-4">BISTRO BOSS</span>
                    <span className="text-sm">RESTAURANT</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-6 text-sm uppercase font-semibold">
                    <NavLink to="/" className={navLinkStyle}>Home</NavLink>
                    <NavLink to="/menu" className={navLinkStyle}>Our Menu</NavLink>
                    <NavLink to="/shop/salad" className={navLinkStyle}>Our Shop</NavLink>
                    <NavLink to="/contact" className={navLinkStyle}>Contact Us</NavLink>
                    <NavLink to="/login" className={navLinkStyle}>Login</NavLink>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4">
                    <FaShoppingCart className="text-xl cursor-pointer" />
                    <button className="flex items-center gap-1">
                        <span>Sign Out</span>
                        <FaUserCircle className="text-xl ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
