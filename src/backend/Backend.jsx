import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftMenu from './LeftMenu';

function Backend(props) {
    return (
        <div>
            Backend Layout
            <LeftMenu />
            <Outlet />
        </div>
    );
}

export default Backend;