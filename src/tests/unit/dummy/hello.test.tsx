import * as React from "react";
import Hello from "../../../components/experimental/Hello";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

let container: any = null;

beforeEach(() => {
    // Setup a DOM element as a render target.
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // Cleanup on exiting.
    unmountComponentAtNode(container);
    container.remove();
});

it("render with or without a name", () => {
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");

    act(() => {
        render(<Hello name="Jenny"/>, container);
    });
    expect(container.textContent).toBe("Hello, Jenny");
});
