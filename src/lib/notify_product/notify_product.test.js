import React from 'react';
import NotifyProduct from './notify_product';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders correctly', () => {
   const tree = renderer
      .create(<NotifyProduct productcode={145307} optionid={4} salesChannelID={1} />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});
