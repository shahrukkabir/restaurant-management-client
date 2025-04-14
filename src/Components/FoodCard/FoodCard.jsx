import React from 'react';

const FoodCard = ({ item }) => {
    return (
        <div className="max-w-xs mx-auto rounded overflow-hidden shadow-md border bg-white">
            <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-52 object-cover" />
                <span className="absolute top-2 right-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded">
                    ${item.price}
                </span>
            </div>
            <div className="px-4 py-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{item.recipe}</p>
                <button className="mt-4 px-5 py-2 rounded-md font-medium text-yellow-700 border border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all duration-300">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
