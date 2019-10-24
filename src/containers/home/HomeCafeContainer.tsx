import * as React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import axios from 'axios';

/* Layouts. */
import BoxLayout from "../../layouts/BoxLayout";
import {changeCoffee, changeCake} from "../../redux/actions/sections/homeActions";
import store from "../../redux/store";
import {setLoading} from "../../redux/actions/loadingActions";
import {Simulate} from "react-dom/test-utils";
import {loadingReducer} from "../../redux/reducers/loadingReducers";

/* Json data. */
let homeCafeData = require('./../../middleware/data/cafe.json');

/* Images. */
const cakeImage = require('../../multimedia/images/cake.jpg');

interface HomeCafeContainerProps {
    cake: string;
    coffee: string;
    loading: boolean;
    changeCoffee: (text:string) => string;
    changeCake: (text:string) => string;
    setLoading: (loading: boolean) => boolean;
}

const HomeCafeContainer: React.FC<HomeCafeContainerProps> = (props) => {
    useEffect(() => {
        const fetchTitle = async () => {
            props.setLoading(true);
            const res = await
                axios.get('https://jsonplaceholder.typicode.com/photos/1');
            props.changeCake(res.data.title);
            props.setLoading(false);
        };

        fetchTitle();
    }, []);

    return (
        <>
            <BoxLayout
                titleHeader={"Cafe"}
                buttonName1={"Recipe"}
                buttonName2={"Pictures"}
                contentData={props.cake}
                image={cakeImage}
                changeItem={props.changeCake}
                loading={props.loading}
            />
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        coffee: state.cafeReducer.coffee,
        cake: state.cafeReducer.cake,
        loading: state.loadingReducer.loading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeCoffee: (text: string) => dispatch(changeCoffee(text)),
        changeCake: (text: string) => dispatch(changeCake(text)),
        setLoading: (loading: boolean) => dispatch(setLoading(loading))
    }
};

const HomeCafeState = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeCafeContainer);

export default HomeCafeState;
