import React from 'react';

const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;

    return (
        <div className="flex items-center gap-5 mb-8">
            <img src={image} className="w-16 h-16 rounded-full"/>
            <div className="flex-1 border-b border-dashed pb-2">
                <div className="flex justify-between items-center">
                    <h4 className="uppercase text-white-800 font-semibold">{name}</h4>
                    <p className="text-yellow-600 font-semibold">${price}</p>
                </div>
                <p className="text-sm text-gray-600">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;
