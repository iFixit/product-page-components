import styled from 'styled-components';
import { color } from '@core-ds/primitives';

const Label = styled.span`
   background: ${color.gray1};
   color: ${color.gray6};
   border-radius: 4px;
   font-size: 14px;
   font-weight: bold;
   padding: 3px 4px;
   z-index: 1;
`;

export default Label;
