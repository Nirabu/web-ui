import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {Category} from "../../presentations/components/display/footers/Category";
import {Tour} from "../../containers/tour/other/types/Tour";

storiesOf('Components/Footers/tour', module)
    .add('Aquarium', () => <Category category={Tour.Aquarium} />)


