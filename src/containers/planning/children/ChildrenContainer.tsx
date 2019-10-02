/* Imports */
import * as React from 'react';
/* Components */
/* CSS */
import './playground.scss'

export const ChildrenContainer: React.FC = () => {
    return (
        <div className='entrance'>

            <header className='theme'>
                <h2>Nimado Entrance</h2>
            </header>

            <nav className='main-navigation'>
            </nav>

            <main className='main-content'>
                <div className='nimado-news'>
                    <div style={{textAlign: 'center', paddingTop: '1rem'}}>Nimado news</div>
                </div>
            </main>
            
        </div>
    )
};