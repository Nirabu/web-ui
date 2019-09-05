import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <ul>
            <li><NavLink to='/'>Entrance</NavLink></li>
            <li><NavLink to='/aquarium'>Aquarium</NavLink></li>
            <li><NavLink to='/cafe'>Cafe</NavLink></li>
            <li><NavLink to='/garden'>Garden</NavLink></li>
            <li><NavLink to='/cinema'>Cinema</NavLink></li>
            <li><NavLink to='/news'>News</NavLink></li>
            <li style={{paddingLeft: '5rem'}}><NavLink to='/favorites'>Favorites</NavLink></li>
            <li><NavLink to='/history'>History</NavLink></li>
        </ul>
    )
};