import React from 'react';
import MenuItem from '../../Shared/MenuItem';
import CommonCover from '../../Shared/CommonCover';

const MenuCategory = ({ items, title, description, img }) => {
    return (
        <div>
            {title && <CommonCover title={title} image={img} description={description}></CommonCover>}
            <div className='grid md:grid-cols-2 gap-y-8 gap-x-16 max-w-6xl mx-auto'>
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;
