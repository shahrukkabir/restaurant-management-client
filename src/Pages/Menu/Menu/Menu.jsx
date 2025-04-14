import React from 'react';
import { Helmet } from 'react-helmet-async';
import CommonCover from '../../Shared/CommonCover';
import img from '../../../../src/assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [data] = useMenu();
    const dessert = data.filter(item => item.category === 'dessert');
    const pizza = data.filter(item => item.category === 'pizza');
    const salad = data.filter(item => item.category === 'salad');
    const soup = data.filter(item => item.category === 'soup');
    const offered = data.filter(item => item.category === 'offered');
    
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <CommonCover title={"OUR MENU"} image={img} description={"Would you like to try a dish?"}></CommonCover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}>
            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
        </div>
    );
};

export default Menu;

