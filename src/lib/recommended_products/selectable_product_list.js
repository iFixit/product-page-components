import React from 'react';
import styled from 'styled-components';
import { space, color, lineHeight, fontSize } from '@core-ds/primitives';
import Label from './label.js';
import { Checkbox } from '@ifixit/toolbox';
import { _js } from '@ifixit/localize';

const ProductLabel = styled.span`
   color: ${props => props.isSelected ? color.gray8 : color.gray5};
   cursor: pointer;
   font-size: ${fontSize[2]};
   text-align: left;
   font-weight: bold;
   line-height: ${lineHeight.tight};
   margin-bottom: ${space[2]};
   display: block;
`;

const checkboxMargin = space[2];

const ProductLabelWithCheckbox = styled(ProductLabel)`
   position: relative;
`;

const ProductName = styled.span`
   position: relative;
`;

const ThisItem = styled(Label)`
   margin-right: ${checkboxMargin};
`;

const Price = styled.span`
   color: ${props => props.isSelected ? color.red : color.gray5};
   padding: 0 5px;
   font-weight: normal;
`;

function SelectableProduct({product, isSelected, onSelectedChange}) {
   return (
   <ProductLabelWithCheckbox isSelected={isSelected(product)}>
      <Checkbox
         checked={isSelected(product)}
         labelMargin={checkboxMargin}
         onChange={({checked}) => onSelectedChange(product.sku, checked)}>
         <ProductName>{product.name}</ProductName>
         <Price isSelected={isSelected(product)}>${product.price}</Price>
      </Checkbox>
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
