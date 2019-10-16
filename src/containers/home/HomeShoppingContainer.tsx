import * as React from "react";
import {useEffect} from "react";
import {Box} from "@material-ui/core";
import BoxLayout from "../../layouts/BoxLayout";
import {changeDress, changeShoes} from "../../redux/actions/sections/homeActions";
import {connect} from "react-redux";

let homeShoppingData = require('./../../middleware/data/shopping.json');

interface HomeShoppingContainerProps {
    image: any;

    shoes: string;
    dress: string;
    changeDress: any;
    changeShoes: any;
}

const HomeShoppingContainer: React.FC<HomeShoppingContainerProps> = (props) => {
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
                changeItem={props.changeShoes}
            />
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        shoes: state.shoppingReducer.shoes,
        dress: state.shoppingReducer.dress
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeShoes: (text: string) => dispatch(changeShoes(text)),
        changeDress: (text: string) => dispatch(changeDress(text))
    }
};

const HomeShoppingState = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeShoppingContainer);


export default HomeShoppingState;