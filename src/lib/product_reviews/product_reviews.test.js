import React from 'react';
import ProductReviews from './product_reviews';
import renderer from 'react-test-renderer';
import exampleReviewsNone from '../../example/example_reviews_none.json';
import 'jest-styled-components';

Math.random = jest.fn(() => 1);

const reviewsLink = '/User/Reviews';

it('renders correctly', () => {
   const tree = renderer
      .create(
         <ProductReviews
            productReviews={exampleReviewsNone}
            langid="en"
            itemcode="IF145-002-4"
            reviewsLink={reviewsLink}
         />
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});
