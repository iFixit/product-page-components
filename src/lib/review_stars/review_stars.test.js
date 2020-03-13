import React from 'react';
import ReviewStars from './review_stars';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
   const tree = renderer
      .create(<ReviewStars numReviews={30} average={3.2} starSize={18} />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});
