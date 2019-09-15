import * as React from 'react';
import '../../css/layouts/_cinema.scss';

export const Tv: React.FC = () => {
    return (
        <div className='cinema'>

            <header className='theme'>
                <h2>Nimado Cinema</h2>
            </header>

            <nav className='main-navigation'>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>
        </div>
    )
}