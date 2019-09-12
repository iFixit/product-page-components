import React from 'react';
import styled from 'styled-components';
import { color } from '@core-ds/primitives';

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

const InitialBlock = styled(Block)`
   &:before {
      ${bp1} {
         content: 'This Item';
         position: absolute;
         top: 0;
         right: 0;
         background: ${color.gray1};
         color: ${color.gray6};
         border-radius: 4px;
         font-size: 14px;
         font-weight: bold;
         padding: 3px 4px;
         margin: 15%;
         z-index: 1;
      }
   }
`;

const Image = styled.img`
   width: 100%;
   transition: all ease 0.5s;
   filter: ${props => props.isSelected ? 'opacity(1)' : 'opacity(0.5)'};
`;

const Plus = styled.span`
   position: absolute;
   right: -4%;
   height: -50%;

   &:before {
      content: '+';
      color: ${color.gray5};
      font-size: 18px;
   }

   ${bp1} {
      right: -3%;
   }
`;

function ProductImageGrid({
   initialProduct,
   relatedProducts,
   isSelected}) {

   return (
      <Grid>
         <InitialBlock>
            <Image isSelected={true}
               src={initialProduct.image}
               alt={initialProduct.title} />
            <Plus />
         </InitialBlock>
         {relatedProducts.map((product, key)=> {
            return (
               <Block key={key}>
                  <Image isSelected={isSelected(product)}
                     src={product.image}
                     alt={product.title} />
                  {key < relatedProducts.length - 1 ? (<Plus />) : null}
               </Block>
            )
         })}
      </Grid>
   );
}
export default ProductImageGrid;
