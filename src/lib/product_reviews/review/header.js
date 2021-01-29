import React from 'react';
import styled from 'styled-components';
import { Stars, constants } from '@ifixit/toolbox';

const { color } = constants;

const StarsContainer = styled.span`
   min-width: 115px;
   padding-right: 8px;
`;

const Timestamp = styled.h4`
   margin: 0;
   font-size: 12px;
   font-weight: bold;
   line-height: 1.25;
`;

const Headline = styled.h3`
   margin: 8px 0 0;
   font-size: 18px;
   font-weight: bold;
   line-height: 27px;
`;

const ProductVariantName = styled.h3`
   margin: 0;
   font-size: 18px;
   font-weight: bold;
   line-height: 27px;
`;

const Header = ({ rating, headline, date, productName, productVariantName }) => {

   return (
      <React.Fragment>
         <Headline itemProp="name">
            <StarsContainer
               itemProp="reviewRating"
               itemScope
               itemType="http://schema.org/Rating">
               <meta itemProp="worstRating" content="1" />
               <meta itemProp="ratingValue" content={rating} />
               <meta itemProp="bestRating" content="5" />
               <Stars rating={rating} size={23} activeColor={color.blue[4]} />
            </StarsContainer>
            {headline}
         </Headline>
         <ProductVariantName>{productName} | {productVariantName}</ProductVariantName>
         <Timestamp itemProp="datePublished">{date}</Timestamp>
      </React.Fragment>
   );
};

export default Header;
