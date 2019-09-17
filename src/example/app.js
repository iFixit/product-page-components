import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import { ProductReviews, ReviewStars, ProductNote, RecommendedProducts } from '../lib/index.js';
import exampleReviews from './example_reviews.json';
import exampleProducts from './example_products.json';

import './styles.css';

const SpacedRecommendedProducts = styled.div`
   margin: 20px auto;
   padding: 0 20px;
`;

function App() {
  const reviewsLink = '/User/Reviews';

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
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
      <hr/>
      <ReviewStars
        numReviews={30}
        average={3.2}
        starSize={18}
      />
      <hr/>
      <ProductReviews
        productReviews={exampleReviews}
        langid="en"
        itemcode="IF145-002-4"
        reviewsLink={reviewsLink}
      />
      <hr/>
      <RecommenededProductsExample/>
    </div>
  );
}

function RecommenededProductsExample() {
   const fewerProducts = {
      ...exampleProducts,
      relatedProducts: exampleProducts.relatedProducts.slice(0,1)
   };

   return (
      <>
         <SpacedRecommendedProducts>
            <RecommendedProducts
              {...exampleProducts}
              addToCart={skus => console.log("Add to Cart:", skus)}
            />
         </SpacedRecommendedProducts>
         <hr/>
         <SpacedRecommendedProducts>
            <RecommendedProducts
              {...fewerProducts}
              addToCart={skus => console.log("Add to Cart:", skus)}
            />
         </SpacedRecommendedProducts>
      </>
   );
}

render(<App />, document.getElementById("root"));
