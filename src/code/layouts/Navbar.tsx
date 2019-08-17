import * as React from 'react';

interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <ul>
            <li><a href={"default.asp"}>Home</a></li>
            <li><a href={"default.asp"}>Home</a></li>
            <li><a href={"default.asp"}>Home</a></li>
        </ul>
    )
};