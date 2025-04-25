import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { user, signOutUser, loading } = useContext(AuthContext);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [cart] = useCart();
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Successfully Signed Out');
            })
            .catch(e => {
                console.log("Failed to Sign Out");
            });
    };

    const navLinkStyle = ({ isActive }) =>
        isActive ? "text-yellow-400" : "hover:text-yellow-400";

    const toggleUserInfo = () => {
        setShowUserInfo(!showUserInfo);
    };

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
                    {!user && !loading && <NavLink to="/login" className={navLinkStyle}>Login</NavLink>}
                    {!user && !loading && <NavLink to="/signup" className={navLinkStyle}>SignUp</NavLink>}
                </div>

                {/* Right Icons */}
                <div className="relative flex items-center gap-4">
                    <Link to="/dashboard/cart" className="relative">
                        <FaShoppingCart className="text-xl cursor-pointer" />
                        {cart.length > 0 && (
                            <span className="absolute -top-4 -right-3 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </Link>

                    {loading ? (<span className="loading loading-spinner text-warning"></span>) : user ? (
                        <div className="relative">
                            <button onClick={toggleUserInfo} className="focus:outline-none">
                                <FaUserCircle className="text-2xl cursor-pointer" />
                            </button>
                            {showUserInfo && (
                                <div className="absolute right-0 mt-2 bg-white text-black text-sm p-2 rounded shadow-lg z-20 w-52">
                                    <p className="break-words">{user.email}</p>
                                    <button onClick={handleSignOut} className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded" > Sign Out </button>
                                </div>
                            )}
                        </div>
                    ) :
                        (
                            <NavLink className="flex items-center gap-2">
                                <FaUserCircle className="text-xl" />
                            </NavLink>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
