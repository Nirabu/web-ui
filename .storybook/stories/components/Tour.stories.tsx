import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Tour} from "../../../src/components/navigations/bars/Tour";

storiesOf('Components/Navbars', module)
    .add('Navbar', () => <Tour />);
