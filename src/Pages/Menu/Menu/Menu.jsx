import React from 'react';
import { Helmet } from 'react-helmet-async';
import CommonCover from '../../Shared/CommonCover';
import img from '../../../../src/assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <CommonCover title={"OUR MENU"} image={img} description={"Would you like to try a dish?"}></CommonCover>
        </div>
    );
};

export default Menu;

