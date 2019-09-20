import React from 'react';
import styled from 'styled-components';
import { breakpoint, color, borderRadius, shadow } from '@core-ds/primitives';
import Label from './label.js';
import { Plus as PlusIcon } from '@core-ds/icons/16';
import { _js } from '@ifixit/localize';

const ABOVE_MOBILE = `@media screen and (min-width: ${breakpoint.md})`;
const blockPadding = '10px';

const Grid = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

const Block = styled.div`
   position: relative;
   padding: ${blockPadding} 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ThisItem = styled(Label)`
   display: none;
   ${ABOVE_MOBILE} {
      display: block;
   }
   margin: 10%;
   position: absolute;
   top: ${blockPadding};
   right: 0;
`;

const Image = styled.img`
   width: 100%;
   transition: all ease 0.5s;
   filter: ${props => props.isSelected ? 'opacity(1)' : 'opacity(0.5)'};
   border-radius: ${borderRadius.md};
   box-shadow: ${shadow[1]};
`;

const Plus = styled(PlusIcon)`
   flex-shrink: 0;
   color: ${color.gray5};
   margin: 20px 1.5vw;
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
            <ThisItem>{_js("This Item")}</ThisItem>
            <ProductImage
               isSelected={true}
               product={initialProduct}/>
         </Block>
         {relatedProducts.map((product, key) =>
            <React.Fragment>
               <Plus />
               <Block key={key}>
                  <ProductImage
                     isSelected={isSelected(product)}
                     product={product}/>
               </Block>
            </React.Fragment>
         )}
      </Grid>
   );
}
export default ProductImageGrid;
