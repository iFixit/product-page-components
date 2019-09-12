import React from 'react';
import styled from 'styled-components';
import { color } from '@core-ds/primitives'

/* style variables */
const bp1 = '@media screen and (min-width: 650px)';

const Product = styled.label`
   color: ${props => props.isSelected ? color.gray8 : color.gray5};
   font-size: 16px;
   text-align: left;
   font-weight: bold;
   line-height: 2;
   display: inline-block;
`;

const Checkbox = styled.input`
   margin-right: 5px;

   ${bp1} {
      transform: translateY(-1px);
   }
`;

const ThisItem = styled.span`
   background: ${color.gray1};
   color: ${color.gray6};
   border-radius: 4px;
   padding: 3px 4px;
   margin-right: 5px;
   font-size: 14px;
   line-height: 1.7;
`;

const Price = styled.span`
   color: ${props => props.isSelected ? color.redDark1 : color.gray5};
   padding: 0 5px;
   font-size: 14px;
`;

function SelectableProductList({
   initialProduct,
   relatedProducts,
   isSelected,
   onSelectedChange}) {

   return (<React.Fragment>
      <Product isSelected={true}>
         <ThisItem>This Item</ThisItem>
         {initialProduct.name}
         <Price isSelected={true}>
            ${initialProduct.price}
         </Price>
      </Product>
      {relatedProducts.map((product, key) =>
         <Product
            isSelected={isSelected(product)}
            key={key}>
            <Checkbox type="checkbox"
               onChange={(e) => onSelectedChange(product.sku, e.target.checked)}
               defaultChecked />
            {product.name}
            <Price isSelected={isSelected(product)}>${product.price}</Price>
         </Product>
      )}
   </React.Fragment>);
}

export default SelectableProductList;
