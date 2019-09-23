import * as React from 'react';
import { storiesOf } from "@storybook/react";
import { CafeContainer } from "../../../src/containers/cafe/CafeContainer";
import {Buttons} from "../../../src/presentationals/multi/Buttons";


storiesOf('Pages/Sections/Cafe', module)
    .add('Ok button', () => <Buttons text={'Ok'}/>);
