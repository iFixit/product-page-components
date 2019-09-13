import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { color } from '@core-ds/primitives'
import shuffle from 'lodash/shuffle';
import take from 'lodash/take';
import SelectableProductList from './selectable_product_list.js';
import ProductImageGrid from './product_image_grid.js';

const ABOVE_MOBILE = '@media screen and (min-width: 650px)';

/* styled page elements */
const RecommendedProducts = styled.section`
   padding: 20px 0;
   margin: 0 auto;
   max-width: 1024px;

   ${ABOVE_MOBILE} {
      padding: 20px;
   }
`;

const Container = styled.section`
   padding: 20px;

   ${ABOVE_MOBILE} {
      padding: 10px;
      display: flex;
   }
`;

const Header = styled.header`
   font-weight: bold;
   color: ${color.gray8};
   position: relative;
   text-align: center;
   overflow: hidden;

   &:before,
   &:after {
      content: '';
      position: absolute;
      top: 51%;
      width: 50%;
      height: 1px;
      overflow: hidden;
      background-color: ${color.gray3};
      visibility: hidden;

      ${ABOVE_MOBILE} {
         visibility: visible;
      }
   }

   &:before {
      margin-left: -52%;
   }

   &:after {
      margin-left: 2%;
   }
`;

const Details = styled.section`
   padding: 20px;
   line-height: 1.5;

   ${ABOVE_MOBILE} {
      width: 45%;
      padding: 0 10px;
      margin: 10px 0;
   }
`;

const Price = styled.span`
   color: ${props => props.isSelected ? color.redDark1 : color.gray5};
   padding: 0 5px;
   font-size: 14px;
`;

const Wrapper = styled.div`
   position: relative;
   display: flex;
   width: 100%;
   padding: 10px 0;

   ${Price} {
      color: ${color.redDark1};
      font-weight: bold;
      font-size: 24px;
      width: 35%;
      display: flex;
      align-items: center;
   }
`;

const Submit = styled.button`
   background: ${color.blue};
   color: white;
   font-size: 16px;
   padding: 10px 15px;
   font-weight: bold;
   border-radius: 5px;
   border: none;
`;

const RecommendedProductsComponent =
({addToCart, header, initialProduct, relatedProducts}) => {
   // get random products
   const related = useMemo(() => {
      const products = shuffle(relatedProducts);
      return take(products, 2);
   }, [relatedProducts]);

   const [selected, setSelected] = useState(() => {
      return new Set([
         initialProduct.sku,
         ...relatedProducts.map((product) => product.sku)
      ]);
   });

   const getTotal = () => {
      return initialProduct.price +
         related.map(a => selected.has(a.sku) ? a.price : 0)
         .reduce((a, b) => a + b, 0)
   };

   const onSelectedChange = useCallback((sku, checked) => {
      setSelected((oldSelected) => {
         const selected = new Set(oldSelected);
         if(checked) {
            selected.add(sku);
         } else {
            selected.delete(sku);
         }
         return selected;
      });
   }, [setSelected]);

   const isSelected = (product) => selected.has(product.sku);
   return (
      <RecommendedProducts className="recommended-products">
         <Header>{header}</Header>
         <Container>
            <ProductImageGrid
               initialProduct={initialProduct}
               relatedProducts={related}
               isSelected={isSelected} />
            <Details>
               <SelectableProductList
                  initialProduct={initialProduct}
                  relatedProducts={related}
                  isSelected={isSelected}
                  onSelectedChange={onSelectedChange}/>
               <Wrapper>
                  <Price className="total">${getTotal()}</Price>
                  <Submit onClick={(e) => addToCart(selected)}>Add To Cart</Submit>
               </Wrapper>
            </Details>
         </Container>
      </RecommendedProducts>);
}

export default RecommendedProductsComponent;
