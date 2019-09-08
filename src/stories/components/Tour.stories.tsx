import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Tour} from "../../presentations/components/navigations/navigationbar/Tour";

storiesOf('Components/Navbars', module)
    .add('Navbar', () => <Tour />);
