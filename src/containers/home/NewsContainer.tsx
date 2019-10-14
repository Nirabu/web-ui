import * as React from "react";
import {useEffect, useState} from "react";
import {TitleMedium} from "../../components/Titles";

interface BoxContainerProps {
    title: string;
}

const NewsContainer: React.FC<BoxContainerProps> = (props) => {
    // TODO: Make fetching and pagination work with Redux.
    // const [pictures, setPictures] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentRepo, setCurrentRepo] = useState(1);
    // const [reposPerPage] = useState(4);

    // Fetching and loading
    useEffect(() => {{
            const fetchData = async () => {



            }
        }
    });

    // Get current repos
    return (
        <>
            <TitleMedium title={props.title}/>
        </>
    )
};

export default NewsContainer;