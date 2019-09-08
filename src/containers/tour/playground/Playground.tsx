/* Imports */
import * as React from 'react';

/* Components */
import {Tour} from "../../../presentations/components/navigations/navigationbar/Tour";

/* CSS */
import './playground.scss'

export const Playground: React.FC = () => {
    return (
        <div className='entrance'>

            <header className='theme'>
                <h2>Nimado Entrance</h2>
            </header>

            <nav className='main-navigation'>
                <Tour/>
            </nav>

            <main className='main-content'>
                <div className='nimado-news'>
                    <div style={{textAlign: 'center', paddingTop: '1rem'}}>Nimado news</div>
                </div>
            </main>

            <footer className='ending-entrance'>
                <p>All rights reserved to Nimado</p>
            </footer>
        </div>
    )
};