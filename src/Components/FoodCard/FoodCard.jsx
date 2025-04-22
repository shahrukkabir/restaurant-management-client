import React from 'react';
import useAuth from './../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const handleAddToCart = food => {
        if (user && user.email) {
            //send cart to the database
            const cartItem = {
                email: user.email,
                menuId: item._id,
                name: item.name,
                image: item.image,
                price: item.price
            }
            axios.post('http://localhost:5000/carts',cartItem)
            .then(res => {
                console.log(res.data);
            })
        }
        else {
            toast.warning("Please log in to add items to the cart.");
            navigate("/login", { state: { from: location } });
            console.log(location);     
        }
    }
    return (
        <div className="max-w-xs mx-auto rounded shadow-md border bg-white">
            <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-52 object-cover" />
                <span className="absolute top-2 right-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded">
                    ${item.price}
                </span>
            </div>
            <div className="px-4 py-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{item.recipe}</p>
                <button onClick={() => handleAddToCart(item)} className="mt-4 px-5 py-2 rounded-md font-medium text-yellow-700 border border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all duration-300">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
