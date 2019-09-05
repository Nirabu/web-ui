import * as React from 'react';
import './Aquarium.scss'
import {Navbar} from "../../global/components/navigations/react/Navbar";

export const Aquarium: React.FC = () => {
    return (
        <div className='aquarium'>

            <header className='theme'>
                <h2>Aquarium</h2>
            </header>

            <nav className='main-navigation'>
                <Navbar/>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>

            <footer className='ending'>
                <p>All rights reserved to Nimado</p>
            </footer>
        </div>
    )
};