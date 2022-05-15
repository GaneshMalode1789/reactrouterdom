import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <NavLink style={ ({isActive}) => { 
                    return { color: isActive ? 'red' : '' }
                }} to={"/"}>Home</NavLink> |
                <NavLink style={ ({isActive}) => { 
                    return { color: isActive ? 'red' : '' }
                }} to={"/about"}> About</NavLink> | 
                <NavLink style={ ({isActive}) => { 
                    return { color: isActive ? 'red' : '' }
                }} to={"/contact"} state={{name: "url data"}}> Contact</NavLink> | 
                <NavLink style={ ({isActive}) => { 
                    return { color: isActive ? 'red' : '' }
                }} to={"/contact/123"}> ID</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar;