/* Imports */
import * as React from 'react';

/* Components */
import {Navbar} from "../../global/components/navigations/react/Navbar";

/* CSS */
import './Entrance.scss'

export const Entrance: React.FC = () => {
    return (
        <div className='entrance'>

            <header className='theme'>
                <h2>Entrance</h2>
            </header>

            <nav className='main-navigation'>
                <Navbar/>
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