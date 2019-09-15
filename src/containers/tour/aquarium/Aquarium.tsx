import React from 'react';

import {Tour} from "../../../presentations/components/navigations/bars/Tour";

import {connect} from "react-redux";

import '../../../css/layouts/_aquarium.scss';
import {Account} from "../../../presentations/components/navigations/bars/Account";
import Temperature from "../../../presentations/components/display/weather/Temperature";
import {Main} from "../../portal/Main";

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
                <Tour/>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>
        </div>
    );
};