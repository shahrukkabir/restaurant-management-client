import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularData = data.filter(item => item.category === 'popular');
    //             setMenu(popularData);
    //         });
    // }, [])

    //using hooks

    const [data] = useMenu();
    const popular = data.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle heading={"From Our Menu"} subHeading={"---Check it out---"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-y-8 gap-x-16 max-w-6xl mx-auto'>
                {
                    popular.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <button className="text-base flex mt-8 mx-auto font-semibold text-white relative px-6 pb-2 border-b-4 border-b-gray-400 rounded-b-3xl">
                VIEW FULL MENU
            </button>
        </section>
    );
};

export default PopularMenu