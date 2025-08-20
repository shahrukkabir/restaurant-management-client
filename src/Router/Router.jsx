import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from './PrivateRoute';
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from './AdminRoute';
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import Contact from "../Pages/Contact/Contact";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistroy from "../Pages/Dashboard/PaymentHistory/PaymentHistroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>ERROR</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'shop/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //normal user route
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistroy></PaymentHistroy>
      },

      // admin routes
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'ManageBookings',
        element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      }
    ]
  }
]);

export default router;
