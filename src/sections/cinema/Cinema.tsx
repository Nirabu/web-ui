import * as React from 'react';
import {Navbar} from "../../global/components/navigations/Navbar";
import './cinema.scss';

export const Cinema: React.FC = () => {
    return (
        <div className='cinema'>

            <header className='theme'>
                <h2>Cinema</h2>
            </header>

            <nav className='main-navigation'>
                <Navbar/>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>

            <footer className='ending-cinema'>
                <p>All rights reserved to Nimado</p>
            </footer>
        </div>
    )
}