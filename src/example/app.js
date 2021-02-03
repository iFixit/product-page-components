import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import {
   ProductReviews,
   ReviewStars,
   ProductNote,
   RecommendedProducts,
   NotifyProduct,
   StoreDropdown,
   LanguageDropdownContainer,
} from '../lib/index.js';
import exampleReviews from './example_reviews.json';
import exampleReviewsNone from './example_reviews_none.json';
import exampleProducts from './example_products.json';
import exampleProductsLongTitles from './example_products_long_titles.json';
import exampleProductsFloatingPointIssues from './example_products_floating_point_issues.json';
import stores from './stores.json';
import languages from './languages.json';

import './styles.css';

const MOBILE = `@media screen and (max-width: 500px)`;

const AppContainer = styled.div`
   a {
      text-decoration: none;
   }
`;

const SpacedRecommendedProducts = styled.div`
   margin: 20px auto;
   padding: 0 20px;

   ${MOBILE} {
      padding: 0;
   }
`;

const ProductContainer = styled.div`
   border-radius: 4px;
   background-color: #f7f9fa;
   padding: 30px;
   width: 400px;
   box-sizing: border-box;
`;

const StyledStoreDropdown = styled(StoreDropdown)`
   max-width: 204px;
   border-radius: 8px;
   border: 1px black solid;

   a {
      text-decoration: none;
   }
`;

const DropdownContainer = styled.div`
   width: 100%;
   height: 400px;
   display: flex;
   justify-content: center;
`;

function App() {
   const reviewsLink = '/User/Reviews';

   return (
      <AppContainer>
         <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
         <ProductNote type="note" title="Example Note" html="Example Contents" />
         <ProductNote type="disclaimer" title="Example Disclaimer" html="Example Contents" />
         <ProductNote type="warning" title="Example Warning" html="Example Contents" />
         <hr />
         <ReviewStars numReviews={30} average={3.2} starSize={18} />
         <hr />
         <ProductReviews
            productReviews={exampleReviewsNone}
            langid="en"
            itemcode="IF145-002-4"
            reviewsLink={reviewsLink}
         />
         <hr />
         <ProductReviews
            productReviews={exampleReviews}
            langid="en"
            itemcode="IF145-002-4"
            reviewsLink={reviewsLink}
         />
         <hr />
         <RecommendedProductsExample />
         <hr />
         <ProductContainer>
            <NotifyProduct sku={1453074} salesChannelID={1} />
         </ProductContainer>
         <hr />
         <StyledStoreDropdown stores={stores} onClickStore={store => console.log(store)} />
         <hr />
         <DropdownContainer>
            <LanguageDropdownContainer
               languages={languages}
               translationPreferencesUrl="https://www.cominor.com/Login"
               machineTranslationRequested={false}
               placement="top-end"
            />
         </DropdownContainer>
      </AppContainer>
   );
}

const addToCart = skus => console.log('Add to Cart:', skus);

function RecommendedProductsExample() {
   const fewerProducts = {
      ...exampleProducts,
      relatedProducts: exampleProducts.relatedProducts.slice(0, 1),
   };

   return (
      <>
         <SpacedRecommendedProducts>
            <RecommendedProducts {...exampleProducts} addToCart={addToCart} />
         </SpacedRecommendedProducts>
         <hr />
         <SpacedRecommendedProducts>
            <RecommendedProducts {...exampleProductsLongTitles} addToCart={addToCart} />
         </SpacedRecommendedProducts>
         <hr />
         <SpacedRecommendedProducts>
            <RecommendedProducts {...fewerProducts} addToCart={addToCart} />
         </SpacedRecommendedProducts>
         <hr />
         <SpacedRecommendedProducts>
            <RecommendedProducts {...exampleProductsFloatingPointIssues} addToCart={addToCart} />
         </SpacedRecommendedProducts>
      </>
   );
}

render(<App />, document.getElementById('root'));
