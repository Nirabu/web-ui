import React from 'react';

import './index.scss';

import {Main} from "./global/Main";
import {Account} from "./global/components/navigations/Account";
import {Weather} from "./global/components/display/Weather";

const App: React.FC = () => {
    return (
        <div className="App">
            <nav className='account'>
                <Account/>
            </nav>

            <article className='weather'>
                <Weather/>
            </article>

            <main className='mainContent'>
                <Main/>
            </main>
        </div>
    );
};

export default App;
