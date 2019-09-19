import * as React from 'react';
import { storiesOf } from "@storybook/react";
import { Cafe } from "../../../src/containers/cafe/Cafe";
import {Buttons} from "../../../src/single/multi/Buttons";


storiesOf('Pages/Sections/Cafe', module)
    .add('Ok button', () => <Buttons text={'Ok'}/>);
