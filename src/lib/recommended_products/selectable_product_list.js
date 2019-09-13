import React from 'react';
import styled from 'styled-components';
import { color } from '@core-ds/primitives';
import Label from './label.js';

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
`;

const ThisItem = styled(Label)`
   margin-right: 5px;
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
