import * as React from 'react';
import '../../../css/layouts/_aquarium.scss';
import {Tour} from "../../../presentations/components/navigations/navigationbar/Tour";

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