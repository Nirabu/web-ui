import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Tour} from "../../../src/presentations/components/navigations/navigationbar/Tour";

storiesOf('Components/Navbars', module)
    .add('Navbar', () => <Tour />);
