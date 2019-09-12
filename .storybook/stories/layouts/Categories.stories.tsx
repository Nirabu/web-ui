import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {Category} from "../../../src/presentations/components/display/footers/Category";
import {Tour} from "../../../src/containers/tour/other/types/Tour";

storiesOf('Components/Footers/tour', module)
    .add('Aquarium', () => <Category category={Tour.Aquarium} />)


