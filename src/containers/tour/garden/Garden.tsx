import * as React from 'react';
import {Tour} from "../../../presentations/components/navigations/navigationbar/Tour";
import './garden.scss';

export const Garden: React.FC = () => {
    return (
        <div className='garden'>
            <header className='theme'>
                <h2>Nimado Garden</h2>
            </header>

            <nav className='main-navigation'>
                <Tour/>
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