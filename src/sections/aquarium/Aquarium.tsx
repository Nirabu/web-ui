import * as React from 'react';
import './Aquarium.scss'

export const Aquarium: React.FC = () => {
    return (
        <div className='grid_container'>

            <header>
                <h1>The open sea</h1>
            </header>

            <main>
                <aside>
                    <h4>Animals in the main sea</h4>
                    <p>Dolphins</p>
                    <p>Whales</p>
                    <p>Fish</p>
                    <p>Sharks</p>
                </aside>
            </main>
        </div>
    )
};