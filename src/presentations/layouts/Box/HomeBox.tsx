import * as React from 'react';
import Box from "../../components/display/titles/Box";
import Category from "../../components/display/titles/Category";
import SubContent from '../../components/display/content/SubContent';

interface HomeBoxProps {
    title1: string;
    content1: string;
    title2: string;
    content2: string;
    title3: string;
    content3: string;
    title4?: string;
    content4?: string;
}

const HomeBox: React.FC<HomeBoxProps> = (props) => {
    return (
        <>
            <Category title={props.title1}/>
            <SubContent content={props.content1}/>
            <Category title={props.title2}/>
            <SubContent content={props.content2}/>
            <Category title={props.title3}/>
            <SubContent content={props.content3}/>
        </>
    )
};

export default HomeBox;