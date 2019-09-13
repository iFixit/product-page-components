import React from 'react';
import styled from 'styled-components';
import { color } from '@core-ds/primitives';
import Label from './label.js';

/* style variables */
const bp1 = '@media screen and (min-width: 650px)';

const Grid = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   margin: 0 10px;

   ${bp1} {
      width: 55%;
      margin: 10px 0;
   }
`;

const Block = styled.div`
   position: relative;
   width: calc(33.33% - 20px);
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ThisItem = styled(Label)`
   display: none;
   ${bp1} {
      display: block;
   }
   margin: 15%;
   position: absolute;
   top: 0;
   right: 0;
`;

const Image = styled.img`
   width: 100%;
   transition: all ease 0.5s;
   filter: ${props => props.isSelected ? 'opacity(1)' : 'opacity(0.5)'};
`;

const Plus = styled.span`
   position: absolute;
   left: -4%;
   height: -50%;

   &:before {
      content: '+';
      color: ${color.gray5};
      font-size: 18px;
   }

   ${bp1} {
      left: -3%;
   }
`;

function ProductImage({product, isSelected}) {
   return (
      <Image isSelected={isSelected}
         src={product.image}
         alt={product.title} />
   );
}

function ProductImageGrid({
   initialProduct,
   relatedProducts,
   isSelected}) {

   return (
      <Grid>
         <Block>
            <ThisItem>This Item</ThisItem>
            <ProductImage
               isSelected={true}
               product={initialProduct}/>
         </Block>
         {relatedProducts.map((product, key) =>
            <Block key={key}>
               <Plus />
               <ProductImage
                  isSelected={isSelected(product)}
                  product={product}/>
            </Block>
         )}
      </Grid>
   );
}
export default ProductImageGrid;
