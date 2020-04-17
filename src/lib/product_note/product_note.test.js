import React from 'react';
import ProductNote from './product_note';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders correctly', () => {
   const tree = renderer
      .create(
         <ProductNote
            html="Example Contents"
            title="Example Contents"
            type="note"
         />
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});
