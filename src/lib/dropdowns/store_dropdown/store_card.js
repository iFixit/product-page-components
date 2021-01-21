import React from 'react';
import { CardLink } from '../card_dropdown_parts';
import StoreFlag from './store_flag';
import styled from 'styled-components';
import { color, space, fontSize } from '@core-ds/primitives';

const StoreName = styled.div`
   padding-left: ${space[3]};
   color: ${color.gray8};
   font-size: ${fontSize[1]};
   line-height: ${fontSize[2]};
`;

const Currency = styled.div`
   color: ${color.gray4};
   font-size: ${fontSize[0]};
   line-height: ${fontSize[1]};
`;

const StoreNameContainer = styled.div`
   display: flex;
   align-items: center;
`;

const StyledCardLink = styled(CardLink)`
   display: flex;
   justify-content: space-between;

   box-sizing: border-box;
   min-width: 204px;

   padding: ${space[2]};
   padding-left: ${space[3]};
   padding-right: ${space[4]};

   font-family: Lato;
   font-style: normal;
   font-weight: normal;

   :hover {
      background-color: ${color.gray1};
   }
`;

const MobileStyledCardLink = styled(StyledCardLink)`
   padding: ${space[3]} ${space[5]};
   font-weight: ${({ isDisplayStore }) => (isDisplayStore ? 'bold' : 'normal')};

   ${StoreName} {
      padding-left: ${space[2]};
      font-size: ${fontSize[2]};
      line-height: ${fontSize[4]};
   }

   ${Currency} {
      font-size: ${fontSize[1]};
      ${({ isDisplayStore }) => (isDisplayStore ? `color: ${color.gray8};` : '')}
   }
`;

const StoreCard = ({ store, updateStorePreference, mobile, isDisplayStore }) => {
   const CardLinkType = mobile ? MobileStyledCardLink : StyledCardLink;

   return (
      <CardLinkType
         href="#"
         id={`${store.storeCode}StoreLink`}
         onClick={updateStorePreference}
         isDisplayStore={isDisplayStore}
      >
         <StoreNameContainer>
            <StoreFlag storeCode={store.storeCode} />
            <StoreName>{store.name}</StoreName>
         </StoreNameContainer>
         <Currency>{store.currency}</Currency>
      </CardLinkType>
   );
};

export default StoreCard;
