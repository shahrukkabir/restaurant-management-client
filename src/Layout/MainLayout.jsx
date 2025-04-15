import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div className='max-w-7xl mx-auto'>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <NavBar></NavBar>}
            
        </div>
    );
};

export default MainLayout;