import * as React from 'react';
import {Navbar} from "../../global/components/navigations/Navbar";
import './news.scss';

export const News: React.FC = () => {
    return (
        <div className='news'>
            <header className='theme'>
                <h2>News</h2>
            </header>

            <nav className='main-navigation'>
                <Navbar/>
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