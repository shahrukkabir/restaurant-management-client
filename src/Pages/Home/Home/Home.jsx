import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUsBanner from '../CallUs/CallUsBanner';
import Recommend from '../Recommend/Recommend';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUsBanner></CallUsBanner>
            <Recommend></Recommend>
            <Featured></Featured>
        </div>
    );
};

export default Home;