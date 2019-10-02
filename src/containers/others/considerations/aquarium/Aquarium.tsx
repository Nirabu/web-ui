import React from 'react';


import {connect} from "react-redux";

import '../../../../scss/modules/layouts/_aquarium.scss';

interface AppProps {
    color: any;
    changeAquarium: any;
}

export const Aquarium: React.FC<AppProps> = (props) => {
    return (
        <div className='aquarium'>

            <header className='theme'>
                <h2>Nimado Aquarium</h2>
            </header>

            <nav className='main-navigation'>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>
        </div>
    );
};