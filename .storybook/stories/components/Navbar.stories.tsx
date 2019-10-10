import * as React from "react";
import { storiesOf } from "@storybook/react";
import { NavHome } from "./../../../src/components/Navigations";

storiesOf("Layouts/First", module).add("First layout component", () => (
  <NavHome />
));
