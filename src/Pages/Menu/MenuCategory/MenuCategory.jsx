import React from 'react';
import MenuItem from '../../Shared/MenuItem';
import CommonCover from '../../Shared/CommonCover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, description, img }) => {
    return (
        <div>
            {title && <CommonCover title={title} image={img} description={description}></CommonCover>}
            <div className='grid md:grid-cols-2 gap-y-8 gap-x-16 max-w-6xl mx-auto'>
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <Link to={`/shop/${title}`}>
                <button className="text-base flex my-8 mx-auto font-semibold text-white relative px-6 pb-2 border-b-4 border-b-gray-400 rounded-b-3xl">
                    ORDER YOUR FAVOURITE FOOD
                </button>
            </Link>
        </div>
    );
};

export default MenuCategory;
