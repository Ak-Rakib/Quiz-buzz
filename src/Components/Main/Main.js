import React from 'react';
import { Outlet } from 'react-router-dom';
import ColorSchemesExample from '../Header/Navbar';

const Main = () => {
    return (
        <div>
            <ColorSchemesExample></ColorSchemesExample>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;