import React from 'react';
import { render } from 'react-dom';

import { ProductReviews, ReviewStars, ProductNote } from './lib/index.js';
import exampleReviews from './example_reviews.json';

function App() {
  const reviewsLink = '/User/Reviews';

  return (
    <div className="App">
      <ProductNote
        type="note"
        title="Example Note"
        html="Example Contents"
      />
      <ProductNote
        type="disclaimer"
        title="Example Disclaimer"
        html="Example Contents"
      />
      <ProductNote
        type="warning"
        title="Example Warning"
        html="Example Contents"
      />
      <hr />
      <ReviewStars
        numReviews={30}
        average={3.2}
        starSize={18}
      />
      <hr />
      <ProductReviews
        productReviews={exampleReviews}
        langid="en"
        itemcode="IF145-002-4"
        reviewsLink={reviewsLink}
      />
    </div>
  );
}

render(<App />, document.getElementById("root"));
