import * as React from 'react';
import {Tour} from "../../../presentations/components/navigations/bars/Tour";
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
        </div>
    )
};