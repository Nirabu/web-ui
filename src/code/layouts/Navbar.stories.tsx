import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Navbar} from "./Navbar";

storiesOf('Layouts/First', module)
    .add('First layout component', () => <Navbar />);
