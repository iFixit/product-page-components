import styled from 'styled-components';
import { borderRadius, space } from '@core-ds/primitives';

export const StatusType = {
   SUCCESS: 'success',
   ERROR: 'error',
};

const Status = styled.p`
   margin: 0;
   border-width: 1px;
   border-style: solid;
   border-radius: ${borderRadius.md};
   padding: ${space[3]} ${space[3]};
   font-size: 13px;

   ${({ type }) => {
      if (type === StatusType.SUCCESS) {
         return `
            color: #288c4e;
            background-color: #ebf8f0;
            border-color: #99dab2;`;
      } else if (type === StatusType.ERROR) {
         return `
            color: #f02016;
            background-color: #feeded;
            border-color: #fbc1be`;
      }
   }}
`;

export default Status;
