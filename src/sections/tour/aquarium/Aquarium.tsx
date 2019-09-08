import * as React from 'react';
import '../../../css/aquarium.scss';
import {Tour} from "../../../react/components/navigations/navigationbar/Tour";

export const Aquarium: React.FC = () => {
    return (
        <div className='aquarium'>

            <header className='theme'>
                <h2>Nimado Aquarium</h2>
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