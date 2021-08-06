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
   font-size: 15px;
   font-weight: bold;
   line-height: 27px;
`;

const Header = ({ rating, headline, date, productName, productVariantName }) => {

   return (
      <React.Fragment>
         <Headline>
            <StarsContainer>
               <Stars rating={rating} size={23} activeColor={color.blue[4]} />
            </StarsContainer>
            {headline}
         </Headline>
         {productName && productVariantName && (
            <ProductVariantName>
               {productName} | {productVariantName}
            </ProductVariantName>
         )}
         <Timestamp>{date}</Timestamp>
      </React.Fragment>
   );
};

export default Header;
