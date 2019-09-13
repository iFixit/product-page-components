import React from 'react';
import styled from 'styled-components';
import { color } from '@core-ds/primitives';
import Label from './label.js';
import { Plus as PlusIcon } from '@core-ds/icons/16';

const ABOVE_MOBILE = '@media screen and (min-width: 650px)';

const Grid = styled.div`
   display: flex;
   flex-direction: row;
   margin: 0 10px;

   ${ABOVE_MOBILE} {
      width: 55%;
      margin: 10px 0;
   }
`;

const Block = styled.div`
   position: relative;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ThisItem = styled(Label)`
   display: none;
   ${ABOVE_MOBILE} {
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

const Plus = styled(PlusIcon)`
   position: absolute;
   left: -8px;
   color: ${color.gray5};
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
