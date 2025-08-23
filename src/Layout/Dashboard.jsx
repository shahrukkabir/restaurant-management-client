import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaWallet, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin ";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

        // Common link style
    const linkStyle = ({ isActive }) =>
        isActive
            ? "flex items-center gap-2 font-semibold text-white bg-black p-2 rounded"
            : " ";

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 py-14 min-h-screen bg-[#D1A054] text-black">
                <div className="p-6 font-bold text-xl">
                    BISTRO BOSS <br />
                    <span className="text-sm font-normal tracking-widest">
                        R E S T A U R A N T
                    </span>
                </div>
                <ul className="menu p-4 space-y-2">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome" className={linkStyle}>
                                    <FaHome />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems" className={linkStyle}>
                                    <FaUtensils />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems" className={linkStyle}>
                                    <FaList />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings" className={linkStyle}>
                                    <FaBook />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers" className={linkStyle}>
                                    <FaUsers />
                                    All Users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/userHome" className={linkStyle}>
                                    <FaHome />
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation" className={linkStyle}>
                                    <FaCalendar />
                                    Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymentHistory" className={linkStyle}>
                                    <FaWallet />
                                    Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart" className={linkStyle}>
                                    <FaShoppingCart />
                                    My Cart ({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review" className={linkStyle}>
                                    <FaAd />
                                    Add Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings" className={linkStyle}>
                                    <FaList />
                                    My Booking
                                </NavLink>
                            </li>
                        </>
                    )}
                    <div className="divider"></div>
                    {/* Shared NavLinks */}
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
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
