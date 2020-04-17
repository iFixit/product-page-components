import React from 'react';
import RecommendedProducts from './recommended_products';
import renderer from 'react-test-renderer';
import exampleProducts from '../../example/example_products.json';
import 'jest-styled-components';

it('renders correctly', () => {
   const tree = renderer
      .create(<RecommendedProducts {...exampleProducts} addToCart={() => {}} />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});
