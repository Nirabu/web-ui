import * as React from "react";
import {useEffect} from "react";
import axios from 'axios';

/* redux */
import {connect} from "react-redux";
import {changeDress, changeShoes} from "../../redux/actions/sections/homeActions";

/* layouts */
import BoxLayout from "../../layouts/BoxLayout";
import {setLoading} from "../../redux/actions/loadingActions";

/* json */
let homeShoppingData = require('./../../middleware/data/shopping.json');

/* images */
const shoesImage = require('../../multimedia/images/shoes.jpg');

interface HomeShoppingContainerProps {
    shoes: string;
    dress: string;
    loading: boolean;
    changeDress: (text: string) => string;
    changeShoes: (text: string) => string;
    setLoading: (loading: boolean) => boolean;

}

const HomeShoppingContainer: React.FC<HomeShoppingContainerProps> = (props) => {
    useEffect(() => {
        const fetchTitle = async () => {
            props.setLoading(true);
            const res = await
                axios.get('https://jsonplaceholder.typicode.com/photos/3');
            props.changeShoes(res.data.title);
            props.setLoading(false);
        };

        fetchTitle();
    }, []);

    return (
        <>
            <BoxLayout
                titleHeader="Shopping"
                buttonName1={"Recipe"}
                buttonName2={"Pictures"}
                contentData={props.shoes}
                image={shoesImage}
                changeItem={props.changeShoes}
                loading={props.loading}
            />
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        shoes: state.shoppingReducer.shoes,
        dress: state.shoppingReducer.dress,
        loading: state.loadingReducer.loading
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeShoes: (text: string) => dispatch(changeShoes(text)),
        changeDress: (text: string) => dispatch(changeDress(text)),
        setLoading: (loading: boolean) => dispatch(setLoading(loading))
    }
};

const HomeShoppingState = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeShoppingContainer);


export default HomeShoppingState;
