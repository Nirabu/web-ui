import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Navbar} from "./Navbar";

storiesOf('Components/Navbar', module)
    .add('Navbar', () => <Navbar />);
