import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Header} from "./Header";

storiesOf('Components/Headers', module)
    .add('Header-1', () => <Header title={'Nimado'}/>);
