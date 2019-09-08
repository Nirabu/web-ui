import * as React from 'react';
import {Tour} from "../../presentations/components/navigations/navigationbar/Tour";
import '../../css/layouts/_cinema.scss';

export const Cinema: React.FC = () => {
    return (
        <div className='cinema'>

            <header className='theme'>
                <h2>Nimado Cinema</h2>
            </header>

            <nav className='main-navigation'>
                <Tour/>
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