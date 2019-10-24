import * as React from "react";
import {useEffect} from "react";
import axios from 'axios';

/* redux */
import {connect} from "react-redux";
import {changeBusan, changeSeoul} from "../../redux/actions/sections/homeActions";

/* layouts */
import BoxLayout from "../../layouts/BoxLayout";
import {setLoading} from "../../redux/actions/loadingActions";

/* json data */
let homeNewsData = require('./../../middleware/data/news.json');

/* images */
const busanImage = require('../../multimedia/images/busan.jpg');

interface HomeNewsContainerProps {
    seoul: string;
    busan: string;
    loading: boolean;
    changeBusan: (text: string) => string;
    changeSeoul: (text: string) => string;
    setLoading: (loading: boolean) => boolean;
}

const HomeNewsContainer: React.FC<HomeNewsContainerProps> = (props) => {
    useEffect(() => {
        const fetchComment = async () => {
            props.setLoading(true);
            const res = await
                axios.get('https://jsonplaceholder.typicode.com/photos/2');
            props.changeBusan(res.data.title);
            props.setLoading(false);
        };

        fetchComment();
    }, []);

    return (
        <>
            <BoxLayout
                titleHeader="News"
                buttonName1={"Recipe"}
                buttonName2={"Pictures"}
                contentData={props.busan}
                image={busanImage}
                changeItem={props.changeBusan}
                loading={props.loading}
            />
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        seoul: state.newsReducer.seoul,
        busan: state.newsReducer.busan,
        loading: state.loadingReducer.loading
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeBusan: (text: string) => dispatch(changeBusan(text)),
        changeSeoul: (text: string) => dispatch(changeSeoul(text)),
        setLoading: (loading: boolean) => dispatch(setLoading(loading))

    }
};

const HomeNewsState = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeNewsContainer);

export default HomeNewsState;
