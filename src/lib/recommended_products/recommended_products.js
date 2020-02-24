import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { breakpoint, color, fontSize } from "@core-ds/primitives";
import SelectableProductList from "./selectable_product_list.js";
import ProductImageGrid from "./product_image_grid.js";
import { _js } from "@ifixit/localize";

const ABOVE_MOBILE = `@media screen and (min-width: ${breakpoint.md})`;

/* styled page elements */
const RecommendedProducts = styled.section`
   max-width: 1024px;

   ${ABOVE_MOBILE} {
      padding: 20px 0;
      display: flex;
      justify-content: space-evenly;
   }
`;

const Details = styled.section`
   margin: 20px 5px;
   line-height: 1.5;
   display: flex;
   flex-direction: column;
   justify-content: center;

   ${ABOVE_MOBILE} {
      flex-shrink: 0;
      max-width: 50%;
      margin: 10px 0px 10px 20px;
   }
`;

const StyledProductImageGrid = styled(ProductImageGrid)`
   margin: 0 10px;

   ${ABOVE_MOBILE} {
      flex-shrink: 0;
      margin: 10px 0;
   }
`;

const Price = styled.span`
   color: ${props => (props.isSelected ? color.redDark1 : color.gray5)};
   padding: 0 5px;
   font-size: ${fontSize[1]};
`;

const Wrapper = styled.div`
   position: relative;
   display: flex;
   width: 100%;
   padding: 10px 0;

   ${Price} {
      color: ${color.redDark1};
      font-weight: bold;
      font-size: ${fontSize[5]};
      margin-right: 24px;
   }
`;

const Submit = styled.button`
   background: ${color.blue};
   font-family: inherit;
   color: white;
   font-size: ${fontSize[1]};
   padding: 10px 15px;
   font-weight: bold;
   border-radius: 5px;
   border: none;
   cursor: pointer;

   &:disabled {
      background: ${color.gray3};
   }
`;

const RecommendedProductsComponent = ({
   addToCart,
   initialProduct,
   relatedProducts
}) => {
   const related = useMemo(
      () => [initialProduct, ...relatedProducts.slice(0, 2)],
      [initialProduct, relatedProducts]
   );

   const [unselected, setUnselected] = useState(() => new Set());

   const isSelected = useCallback(product => !unselected.has(product.sku), [
      unselected
   ]);
   const getSelected = useCallback(() => related.filter(isSelected), [
      related,
      isSelected
   ]);

   const getTotal = useCallback(
      () =>
         getSelected()
            .reduce((a, b) => a + b.price, 0)
            .toLocaleString(undefined, {
               minimumFractionDigits: 2,
               maximumFractionDigits: 2
            }),
      [getSelected]
   );

   const onSelectedChange = useCallback(
      (sku, checked) => {
         setUnselected(oldUnselected => {
            const unselected = new Set(oldUnselected);
            if (checked) {
               unselected.delete(sku);
            } else {
               unselected.add(sku);
            }
            return unselected;
         });
      },
      [setUnselected]
   );

   const fireAddToCart = useCallback(() => {
      addToCart(getSelected());
   }, [addToCart, getSelected]);

   return (
      <RecommendedProducts className="recommended-products">
         <StyledProductImageGrid
            initialProduct={initialProduct}
            relatedProducts={related}
            isSelected={isSelected}
         />
         <Details>
            <SelectableProductList
               initialProduct={initialProduct}
               relatedProducts={related}
               isSelected={isSelected}
               onSelectedChange={onSelectedChange}
            />
            <Wrapper>
               <Price className="total">${getTotal()}</Price>
               <Submit
                  onClick={fireAddToCart}
                  disabled={getSelected().length === 0}
               >
                  {_js("Add to cart")}
               </Submit>
            </Wrapper>
         </Details>
      </RecommendedProducts>
   );
};

export default RecommendedProductsComponent;
