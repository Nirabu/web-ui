import * as React from 'react';
import {Navbar} from "../../global/components/navigations/Navbar";
import './garden.scss';

export const Garden: React.FC = () => {
    return (
        <div className='garden'>
            <header className='theme'>
                <h2>Nimado Garden</h2>
            </header>

            <nav className='main-navigation'>
                <Navbar/>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>

            <footer className='ending-garden'>
                <p>All rights reserved to Nimado</p>
            </footer>
        </div>
    )
};