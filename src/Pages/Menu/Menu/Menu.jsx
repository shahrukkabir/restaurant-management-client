import React from 'react';
import { Helmet } from 'react-helmet-async';
import CommonCover from '../../Shared/CommonCover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import img from '../../../../src/assets/menu/banner3.jpg'
import img3 from '../../../../src/assets/menu/dessert-bg.jpeg'
import img4 from '../../../../src/assets/menu/pizza-bg.jpg'
import img5 from '../../../../src/assets/menu/salad-bg.jpg'
import img6 from '../../../../src/assets/menu/soup-bg.jpg'

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
            {/* main cover */}
            <CommonCover title={"OUR MENU"} image={img} description={"Would you like to try a dish?"}></CommonCover>
            {/* offered title */}
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}>
            </SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title={"DESSERTS"} img={img3} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} ></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={pizza} title={"PIZZA"} img={img4} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} ></MenuCategory>
            {/* salads menu items */}
            <MenuCategory items={salad} title={"SALAD"} img={img5} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} ></MenuCategory>
            {/* salads menu items */}
            <MenuCategory items={soup} title={"SOUPS"} img={img6} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} ></MenuCategory>
            
            
        </div>
    );
};

export default Menu;

