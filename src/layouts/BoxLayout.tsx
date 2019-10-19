import * as React from 'react';
import BoxMain from "./box/parts/BoxMain";
import BoxHeader from "./box/parts/BoxHeader";
import store from "../redux/store";

interface HomeBoxProps {
    titleHeader: string;
    contentData: string;
    changeItem: (text: string) => string;
    image?: string;

    buttonName1: string;
    buttonName2: string;
}

const BoxLayout: React.FC<HomeBoxProps> = (props) => {
    function textEventHandler() {
        props.changeItem('test1');
        console.log(store.getState());
    }

    function textEventHandler2() {
        props.changeItem('test2');
        console.log(store.getState());
    }

    return (
        <div className='boxContent'>
            <header className='boxContent-header'>
                <BoxHeader title={props.titleHeader}/>
            </header>

            <main className='boxContent-main'>
                <section className='boxContent-main-picture'>
                    <picture>
                        <source srcSet={props.image} media="(max-width: 24em)"/>
                        <img src={props.image} alt="picture" width="150" height="150"/>
                    </picture>
                </section>

                <section className='boxContent-main-data'>
                    <BoxMain content={props.contentData}/>
                </section>
            </main>

            <footer className='boxContent-footer'>
                <button onClick={() => textEventHandler()}>{props.buttonName1}</button>
                <button onClick={() => textEventHandler2()}>{props.buttonName2}</button>
            </footer>
        </div>
    )
};

// HomeBox.defaultProps = {
//     value: 'It is default now'
// };

export default BoxLayout;