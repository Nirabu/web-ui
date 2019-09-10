import React from 'react';

import {Tour} from "../../../presentations/components/navigations/navigationbar/Tour";

import {changeAquarium, changeCafe} from "../../../redux/actions/Categories";
import {connect} from "react-redux";

import '../../../css/layouts/_aquarium.scss';

interface AquariumProps {
    color: any;
    changeAquarium: any;
    changeCafe: any;
}

export const Aquarium: React.FC<AquariumProps> = (props) => {
    return (
        <div className='aquarium'>
            <header className='theme'>
                <h2>Nimado Aquarium</h2>
            </header>

            <nav className='main-navigation'>
                <Tour/>
            </nav>

            <main className='main-content'>
                <section>
                    <h1>test</h1>
                </section>
            </main>
        </div>
    )
};

// AppContainer
const mapStateToProps = (state: any) => ({
   colors: state.colors,
});

const mapDispatchToProps = {
    changeAquarium,
    changeCafe,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Aquarium);

export default AppContainer;
