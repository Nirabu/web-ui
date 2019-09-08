import * as React from 'react';
import {Tour} from "../../react/components/navigations/navigationbar/Tour";
import '../../css/layouts/_news.scss';

export const News: React.FC = () => {
    return (
        <div className='news'>
            <header className='theme'>
                <h2>Nimado News</h2>
            </header>

            <nav className='main-navigation'>
                <Tour/>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>

            <footer className='ending-news'>
                <p>All rights reserved to Nimado</p>
            </footer>
        </div>
    )
};