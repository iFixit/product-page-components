import styled from 'styled-components';
import { space, fontWeight } from '@core-ds/primitives';

export const DropdownContainer = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.background};
   box-shadow: '0 6px 18px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.2)';
`;

export const CardColumnContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding: ${({ theme }) => `${theme.dropdownTopBottomPadding} ${theme.dropdownSidePadding}`};
`;

export const CardColumn = styled.div`
   display: flex;
   flex-flow: column nowrap;
`;

export const CardLink = styled.a`
   padding: ${({ theme }) => theme.cardPadding} 0;
   display: flex;
   align-items: center;
   line-height: ${space[3]};
   font-weight: ${fontWeight.bold};
   white-space: nowrap;

   :hover {
      background-color: transparent !important;
      text-decoration: none;
   }
`;
