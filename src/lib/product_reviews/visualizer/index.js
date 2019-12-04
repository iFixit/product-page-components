import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Stars, constants } from '@ifixit/toolbox';
import { ___p } from '@ifixit/localize';
import ReviewBar from './review_bar';
import ReviewLink from './review_link';

const { color, fontSize, spacing } = constants;

const breakpointSm = '@media screen and (max-width: 650px)';

const Container = styled.div`
   margin-right: 18px;
   min-width: 208px;
   background: #f7f9fa;
   padding: ${spacing[5]} ${spacing[4]} ${spacing[4]};
   border-radius: 4px;

   ${breakpointSm} {
      margin-right: 0px;
      width: 100%;
   }
`;

const ContainerHeader = styled.div`
   ${breakpointSm} {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

const Aggregate = styled.span`
   margin: 0 8px;
   font-size: ${fontSize[7]};
   font-weight: 700;
   line-height: 0;
   color: ${color.black};
`;

const AggregateSub = styled.span`
   font-weight: normal;
   font-size: ${fontSize[5]};
   color: #788188;
`;

const StarsContainer = styled.div`
   margin-bottom: 4px;
`;

const ReviewCount = styled.h3`
   margin: 0 0 12px 0;
   font-weight: normal;
   font-size: 14px;
   color: ${color.gray[8]};
`;

class Visualizer extends Component {
   render() {
      const { productReviews, itemcode, reviewsLink } = this.props;
      const { average, groupedReviews } = productReviews;
      const numReviews = productReviews.count;

      return (
         <Container
            itemProp="aggregateRating"
            itemScope
            itemType="http://schema.org/AggregateRating">
            <meta itemProp="worstRating" content="1" />
            <meta itemProp="bestRating" content="5" />

            <ContainerHeader>
               <div>
                  <Aggregate itemProp="ratingValue">{average}</Aggregate>
                  <AggregateSub>&#47; 5</AggregateSub>
               </div>

               <StarsContainer>
                  <Stars
                     rating={average}
                     size={23}
                     activeColor={color.blue[4]}
                  />
               </StarsContainer>

               <ReviewCount itemProp="reviewCount" content={numReviews}>
                  {/* Translators: Number of reviews */}
                  {___p(numReviews, '%1 review', '%1 reviews', numReviews)}
               </ReviewCount>
            </ContainerHeader>

            {Object.keys(groupedReviews)
               .sort()
               .map(rating => (
                  <ReviewBar
                     key={`stars-bar-container-${rating}`}
                     index={rating}
                     count={groupedReviews[rating]}
                     numReviews={numReviews}
                  />
               ))
               .reverse()}

            <ReviewLink itemcode={itemcode} reviewsLink={reviewsLink} />
         </Container>
      );
   }
}

Visualizer.propTypes = {
   productReviews: PropTypes.object.isRequired,
   itemcode: PropTypes.string,
   reviewsLink: PropTypes.string,
};

export default Visualizer;
