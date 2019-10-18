import * as React from 'react';
import BoxMain from "./box/parts/BoxMain";
import BoxHeader from "./box/parts/BoxHeader";
import store from "../redux/store";
import {useEffect} from "react";

interface HomeBoxProps {
    titleHeader: string;
    contentData: string;
    changeItem: (text: string) => string;
    image?: string;

    button1: string;
    button2: string;
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
                <BoxMain content={props.contentData}/>
                <picture>
                    <source srcSet={props.image} media="(max-width: 24em)"/>
                    <img src={props.image} alt="picture" width="200" height="200"/>
                </picture>

                <div className='boxContent-video'>
                    <div className='embed-container'>
                        <iframe
                            width="560"
                            height="315" src="https://www.youtube.com/embed/dx3GxpitvbY"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </main>

            <footer className='boxContent-footer'>
                <button onClick={() => textEventHandler()}>{props.button1}</button>
                <button onClick={() => textEventHandler2()}>{props.button2}</button>
            </footer>
        </div>
    )
};

// HomeBox.defaultProps = {
//     value: 'It is default now'
// };

export default BoxLayout;