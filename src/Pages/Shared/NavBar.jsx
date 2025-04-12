import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 bg-opacity-30 max-w-7xl bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="block leading-4">BISTRO BOSS</span>
          <span className="text-sm tracking-widest">RESTAURANT</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm uppercase font-semibold">
          <Link to="/" className="hover:text-yellow-400 text-yellow-400">Home</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/shop">Our Shop</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <FaShoppingCart className="text-xl cursor-pointer" />
          <button className="flex items-center gap-1">
            <span>Sign Out</span>
            <FaUserCircle className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
