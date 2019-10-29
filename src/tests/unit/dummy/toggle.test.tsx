import * as React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import Toggle from "../../../components/experimental/Toggle";

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("changes value when clicked", () => {
    const onChange = jest.fn();

    act(() => {
        render(<Toggle onChange={onChange} />, container);
    });
    // get ahold of the button element, and trigger some clicks on it
    const button:any = document.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe("Turn off");
});

