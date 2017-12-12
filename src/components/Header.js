import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <ul className="menu-bar">
        <li className="menu-item"> <NavLink exact={true} activeClassName="red" to="/">Home</NavLink> </li>    
        <li className="menu-item"> <NavLink exact={true} activeClassName="red" to="/add">Add</NavLink> </li>    
        <li className="menu-item"> <NavLink exact={true} activeClassName="red" to="/edit">Edit</NavLink> </li>    
    </ul>    
);

export default Header;