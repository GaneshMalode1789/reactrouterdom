import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Frontend(props) {
    return (
        <div>
            Frontend Layout
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Frontend;