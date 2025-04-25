import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaWallet, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054] text-black">
                <div className="p-6 font-bold text-xl">
                    BISTRO BOSS <br />
                    <span className="text-sm font-normal tracking-widest">
                        R E S T A U R A N T
                    </span>
                </div>
                <ul className="menu p-4 space-y-2">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <FaWallet />
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart />
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd />
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaList />
                            My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaSearch />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/salad">
                            <FaShoppingCart />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaList />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-[#F6F6F6] p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
