import * as React from "react";
import {useEffect} from "react";
import BoxLayout from "../../layouts/BoxLayout";
import {changeBusan, changeSeoul} from "../../redux/actions/sections/homeActions";
import {connect} from "react-redux";

let homeNewsData = require('./../../middleware/data/news.json');

interface HomeNewsContainerProps {
    image: any;
    seoul: string;
    busan: string;
    changeBusan: any;
    changeSeoul: any;
}

const HomeNewsContainer: React.FC<HomeNewsContainerProps> = (props) => {
    /* On upload, but stopped at refresh. */
    useEffect(() => {

    }, []);

    return (
        <>
            <BoxLayout
                titleHeader="Cafe content"
                button1={"Recipe"}
                button2={"Pictures"}
                contentData={'New type of cake'}
                image={props.image}
                changeItem={props.changeBusan}
            />
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        seoul: state.newsReducer.seoul,
        busan: state.newsReducer.busan,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeBusan: (text: string) => dispatch(changeBusan(text)),
        changeSeoul: (text: string) => dispatch(changeSeoul(text))
    }
};

const HomeNewsState = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeNewsContainer);

export default HomeNewsState;