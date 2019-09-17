import React from 'react';
import styled from 'styled-components';
import { space, color, lineHeight, fontSize } from '@core-ds/primitives';
import Label from './label.js';

const ProductLabel = styled.label`
   color: ${props => props.isSelected ? color.gray8 : color.gray5};
   cursor: pointer;
   font-size: ${fontSize[2]};
   text-align: left;
   font-weight: bold;
   line-height: ${lineHeight.tight};
   margin-bottom: ${space[2]};
   display: block;
`;

const checkboxSize = 16;
const checkboxMargin = 7;

const ProductLabelWithCheckbox = styled(ProductLabel)`
   padding-left: ${checkboxSize + checkboxMargin}px;
   position: relative;
`;

const Checkbox = styled.input`
   position: absolute;
   left: 0;
   vertical-align: baseline;
   height: ${checkboxSize}px;
   width: ${checkboxSize}px;
`;

const ThisItem = styled(Label)`
   margin-right: 5px;
`;

const Price = styled.span`
   color: ${props => props.isSelected ? color.red : color.gray5};
   padding: 0 5px;
   font-weight: normal;
`;

function SelectableProduct({product, isSelected, onSelectedChange}) {
   return (
   <ProductLabelWithCheckbox isSelected={isSelected(product)}>
      <Checkbox type="checkbox"
         onChange={(e) => onSelectedChange(product.sku, e.target.checked)}
         defaultChecked />
      {product.name}
      <Price isSelected={isSelected(product)}>${product.price}</Price>
   </ProductLabelWithCheckbox>);
}

function SelectableProductList({
   initialProduct,
   relatedProducts,
   isSelected,
   onSelectedChange}) {

   return (<React.Fragment>
      <ProductLabel isSelected={true}>
         <ThisItem>This Item</ThisItem>
         {initialProduct.name}
         <Price isSelected={true}>
            ${initialProduct.price}
         </Price>
      </ProductLabel>
      {relatedProducts.map((product, key) =>
         <SelectableProduct
            product={product}
            isSelected={isSelected}
            onSelectedChange={onSelectedChange}
            key={key}/>
      )}
   </React.Fragment>);
}

export default SelectableProductList;
