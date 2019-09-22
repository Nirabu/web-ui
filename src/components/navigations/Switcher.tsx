import * as React from 'react';
import {connect} from "react-redux";

interface SwitcherProps {
    color: any;
    showText: any;
    hideText: any;
}

export const Switcher: React.FC<SwitcherProps> = (props) => {
    return (
        <>
            <nav>
                <button
                    onClick={() =>
                        props.showText({
                            text: 'You begin to remove' +
                                ' a mountain by carrying away small stones!'
                        })
                    }
                >
                    Show text
                </button>

                <button
                    onClick={() =>
                        props.hideText()
                    }
                >
                    Hide text
                </button>

                <p>{props.color.text}</p>
            </nav>
        </>
    )
};

// AppContainer.js
const mapStateToProps = (state: any) => ({
    color: state.color,
});

// const mapDispatchToProps = {
//     showText,
//     hideText
// };

const AppContainer = connect(
    mapStateToProps,
    // mapDispatchToProps
)(Switcher);

export default AppContainer;