import React from 'react';
import NotifyProduct from './notify_product';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders correctly', () => {
   const tree = renderer.create(<NotifyProduct sku={1453074} salesChannelID={1} />).toJSON();
   expect(tree).toMatchSnapshot();
});
