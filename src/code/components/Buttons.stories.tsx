import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Buttons} from "./Buttons";

storiesOf('Components/Button', module)
    .add('Ok button', () => <Buttons text={'Ok'}/>);
