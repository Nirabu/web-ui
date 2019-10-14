import * as React from "react";
import {useEffect} from "react";
import {Box} from "@material-ui/core";
import BoxLayout from "../../layouts/BoxLayout";

let homeShoppingData = require('./../../middleware/data/shopping.json');

interface CafeContainerProps {
    image: any;
    changeItem: any;
}

const HomeShoppingContainer: React.FC<CafeContainerProps> = (props) => {
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
                changeItem={props.changeItem}
            />
        </>
    )
};

/* Enable redux here instead of sending down everything (?). */

export default HomeShoppingContainer;