import React from 'react';
import MenuItem from '../../Shared/MenuItem';

const MenuCategory = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-y-8 gap-x-16 max-w-6xl mx-auto'>
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;