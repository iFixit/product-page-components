import React from 'react';
import styled from 'styled-components';
import { constants } from '@ifixit/toolbox';
import Author from './author';
import Header from './header';
import ReviewBody from './body';

const breakpointSm = '@media screen and (max-width: 650px)';

const { color } = constants;

const Container = styled.div`
   padding: 32px 18px 0;
   border-bottom: ${props => props.showBorder && '1px solid' + color.gray[2]};

   ${breakpointSm} {
      padding: 32px 0;
   }
`;

const Review = ({ review, showBorder, locale, reviewsUrl }) => {
   const { rating, headline, body, author, created_date, productName, productVariantName } = review;
   const date = new Date(created_date * 1000).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   });
   const body_trunc = body.substring(0, 300);

   return (
      <Container showBorder={showBorder}>
         <Author author={author} reviewsUrl={reviewsUrl} />
         <Header rating={rating} headline={headline} date={date} productName={productName} productVariantName={productVariantName} />
         <ReviewBody body={body} body_trunc={body_trunc} />
      </Container>
   );
};

export default Review;
