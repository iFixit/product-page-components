import React from 'react';
import styled from 'styled-components';
import StoreCard from './store_card';
import { space } from '@core-ds/primitives';
import { DropdownContainer, CardColumn } from '../card_dropdown_parts';

const StyledDropdownContainer = styled(DropdownContainer)`
   padding-top: ${({ mobile }) => (mobile ? space[3] : space[2])};
   padding-bottom: ${space[3]};
`;

const StoreDropdown = ({ stores, mobile, onClickStore, className }) => {
   return (
      <StyledDropdownContainer id="storeDropdown" mobile={mobile} className={className}>
         <CardColumn>
            {stores.map(store => (
               <StoreCard
                  key={store.name}
                  store={store}
                  mobile={mobile}
                  isDisplayStore={store.isDisplayStore}
                  updateStorePreference={() => onClickStore(store)}
               />
            ))}
         </CardColumn>
      </StyledDropdownContainer>
   );
};

export default StoreDropdown;
