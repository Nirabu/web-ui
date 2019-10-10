import * as React from "react";
import { storiesOf } from "@storybook/react";
import { NavHome } from "./../../../src/components/Navigations";

storiesOf("Components/Navigations", module).add("Home-navigation",
() => <NavHome />);
