import * as React from "react";
import {useEffect} from "react";

/* redux */
import {connect} from "react-redux";
import {changeBusan, changeSeoul} from "../../redux/actions/sections/homeActions";

/* layouts */
import BoxLayout from "../../layouts/BoxLayout";

/* json data */
let homeNewsData = require('./../../middleware/data/news.json');

/* images */
const busanImage = require('../../multimedia/images/busan.jpg');

interface HomeNewsContainerProps {
    seoul: string;
    busan: string;
    changeBusan: (text: string) => string;
    changeSeoul: (text: string) => string;
}

const HomeNewsContainer: React.FC<HomeNewsContainerProps> = (props) => {
    /* On upload, but stopped at refresh. */
    useEffect(() => {
        const fetchComment = async () => {
            // setLoading(true);
            // const res = await axiosl.get('url')
            // *change state*
            // setLoading(false);
        }
    }, []);

    return (
        <>
            <BoxLayout
                titleHeader="News content"
                buttonName1={"Recipe"}
                buttonName2={"Pictures"}
                contentData={props.busan}
                image={busanImage}
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