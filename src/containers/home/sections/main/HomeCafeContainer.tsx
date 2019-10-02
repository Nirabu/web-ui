import * as React from 'react';
import HomeBox from "../../../../layouts/box/HomeBox";

const exampleData = {
    coffee: 'coffee',
    tea: 'tea'
};

interface HomeCafeContainerProps {
    coffee: string;
    value: string;
    addCoffee: any;
    color: string;
}

export const HomeCafeContainer: React.FC<HomeCafeContainerProps> = (props) => {
    return (
        <>
            <HomeBox
                titleHeader={'Cafe'}
                titleMain={'Desserts'}
                contentMain={props.coffee}
                contentFooter={'See also'}
                color={props.color}
                value={props.value}
                add={props.addCoffee}
                button1={'Sweets'}
                button2={'Drinks'}
                text1={'New cakes'}
                text2={'New coffee'}
            />
        </>
    )
};

export default HomeCafeContainer;
// const mapStateToProps = (state: any) => {
//     return {
//         coffee: state.cafeReducer.coffee
//     }
// };
//
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         addCoffee: (coffee: string) => dispatch(addCoffee(coffee))
//     }
// };
//
// const AppContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HomeCafeContainer);
//
// export default HomeCafeContainer;