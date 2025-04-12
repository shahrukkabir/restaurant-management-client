import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Category from './../Category/Category';
import MenuItem from '../../Shared/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularData = data.filter(item => item.category === 'popular');
                setMenu(popularData);
            });
    }, [])
    return (
        <section>
            <SectionTitle heading={"From Our Menu"} subHeading={"---Check it out---"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-y-8 gap-x-16 max-w-6xl mx-auto'>
                {
                    menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu