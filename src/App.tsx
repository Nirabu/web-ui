import React from 'react';

import './index.scss';

import {Main} from "./global/Main";
import {Account} from "./global/components/navigations/react/Account";
import {Weather} from "./global/components/display/react/Weather";

const App: React.FC = () => {
    return (
        <div className="App">

            <nav className='account'>
                <Account/>
            </nav>

            <article className='weather'>
                <Weather/>
            </article>

            <header className='mainTitle'>
                <h1>Nimado</h1>
            </header>

            <main className='mainContent'>
                <Main/>
            </main>
        </div>
    );
};

export default App;
