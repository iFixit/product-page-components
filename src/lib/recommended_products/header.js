import styled from 'styled-components';
import { color } from '@core-ds/primitives'

const ABOVE_MOBILE = '@media screen and (min-width: 650px)';

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

export default Header;
