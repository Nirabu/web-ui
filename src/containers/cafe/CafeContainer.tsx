import * as React from 'react';
import '../../scss/containers/Cafe.scss';
import Tour from "../../components/navigations/bars/Tour";

export const CafeContainer: React.FC = () => {
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
