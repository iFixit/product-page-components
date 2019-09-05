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

const Review = ({ itemcode, review, showBorder, locale, reviewsLink }) => {
   const { rating, headline, body, body_trunc, author, modified_date } = review;
   const date = new Date(modified_date * 1000).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   });

   return (
      <Container
         itemProp="review"
         itemScope
         itemType="http://schema.org/Review"
         showBorder={showBorder}>
         <Author author={author} itemcode={itemcode} reviewsLink={reviewsLink} />
         <Header rating={rating} headline={headline} date={date} />
         <ReviewBody body={body} body_trunc={body_trunc} />
      </Container>
   );
};

export default Review;
