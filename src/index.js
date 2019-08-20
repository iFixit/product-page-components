import React from 'react';
import { render } from 'react-dom';

import { ProductReviews, ReviewStars } from './lib/index.js';
import exampleReviews from './example_reviews.json';

function App() {
  // Dummy translation function. Just replaces numbered args.
  const translate =
    (str, ...args) => [...args].reduceRight(
      (tmpStr, replacement, index) =>
        tmpStr.replace("%" + (index + 1), args[index]),
      str
    );
  const translatePlural = (num, str1, str2, ...args) =>
    (num === 1 ? translate(str1, ...args) : translate(str2, ...args));
  const reviewsLink = '/User/Reviews';

  return (
    <div className="App">
      <ReviewStars
        numReviews={30}
        average={3.2}
        starSize={18}
        translate={translate}
      />
      <hr />
      <ProductReviews
        productReviews={exampleReviews}
        langid="en"
        itemcode="IF145-002-4"
        translate={translate}
        translatePlural={translatePlural}
        reviewsLink={reviewsLink}
      />
    </div>
  );
}

render(<App />, document.getElementById("root"));
