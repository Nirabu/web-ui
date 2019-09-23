import * as React from 'react';
import {NavLink} from "react-router-dom";

export const PortalNav: React.FC = (props) => {
    return (
        <ul>
            <li className='link-cafe'><NavLink to='/cafe'>Cafe</NavLink></li>
            <li className='link-news'><NavLink to='/news'>News</NavLink></li>
            <li className='link-shopping'><NavLink to='/shopping'>Shopping</NavLink></li>
            <li className='link-tv'><NavLink to='/tv'>TV</NavLink></li>
            <li className='link-weather'><NavLink to='/weather'>Weather</NavLink></li>
            <li className='link-children'><NavLink to='/children'>Children</NavLink></li>
        </ul>
    )
};