import * as React from "react";
import {TitleMedium} from "../../components/Titles";
import {useEffect} from "react";

interface BoxContainerProps {
    title: string;
}

const CafeContainer: React.FC<BoxContainerProps> = (props) => {
    

    useEffect(() => {

    });

    return (
        <>
            <TitleMedium title={props.title}/>
        </>
    )
};

export default CafeContainer;