import * as React from 'react';
import '../../../../scss/containers/garden.scss';

export const Garden: React.FC = () => {
    return (
        <div className='garden'>
            <header className='theme'>
                <h2>Nimado Garden</h2>
            </header>

            <nav className='main-navigation'>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>
        </div>
    )
};