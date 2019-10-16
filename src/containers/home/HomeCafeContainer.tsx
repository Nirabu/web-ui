import * as React from "react";
import {useEffect} from "react";
import {Box} from "@material-ui/core";
import BoxLayout from "../../layouts/BoxLayout";
import {changeCoffee, changeCake} from "../../redux/actions/sections/homeActions";
import {connect} from "react-redux";

let homeCafeData = require('./../../middleware/data/cafe.json');

interface HomeCafeContainerProps {
    image: any;
    cake: string;
    coffee: string;
    changeCoffee: any;
    changeCake: any;
}

export const HomeCafeContainer: React.FC<HomeCafeContainerProps> = (props) => {
    /* On upload, but stopped at refresh. */
    useEffect(() => {

    }, []);

    return (
        <>
            <BoxLayout
                titleHeader={"Cafe content"}
                button1={"Recipe"}
                button2={"Pictures"}
                contentData={'New type of cake'}
                image={props.image}
                changeItem={props.changeCake}

            />
            <button
            >
                {props.cake}
            </button>
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        coffee: state.cafeReducer.coffee,
        cake: state.cafeReducer.cake
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeCoffee: (text: string) => dispatch(changeCoffee(text)),
        changeCake: (text: string) => dispatch(changeCake(text))
    }
};

const HomeCafeState = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeCafeContainer);

export default HomeCafeState;
