import * as React from 'react';
import './Cafe.scss';
import {Tour} from "../../../presentations/components/navigations/navigationbar/Tour";

export const Cafe: React.FC = () => {
    return (
        <div className='cafe'>

            <header className='theme'>
                <h2>Nimado Cafe</h2>
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
