import * as React from 'react';
import { storiesOf } from "@storybook/react";
import { Cafe } from "../../containers/tour/cafe/Cafe";
import {Buttons} from "../../presentations/components/multi/Buttons";


storiesOf('Pages/Sections/Cafe', module)
    .add('Ok button', () => <Buttons text={'Ok'}/>);
