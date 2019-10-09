import * as React from 'react';
import { storiesOf } from "@storybook/react";
import {Buttons} from "../../../src/components/Buttons";


storiesOf('Pages/Sections/Cafe', module)
    .add('Ok button', () => <Buttons text={'Ok'}/>);
