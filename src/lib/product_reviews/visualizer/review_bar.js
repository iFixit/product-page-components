import React from 'react';
import styled from 'styled-components';
import { ___p } from '@ifixit/localize';

const breakpointSm = '@media screen and (max-width: 650px)';

const BarContainer = styled.div`
   display: flex;
   align-items: center;
   margin: 8px 0;

   ${breakpointSm} {
      justify-content: space-between;
   }
`;

const Bar = styled.div`
   flex: 1;
   position: relative;
   height: 8px;
   max-width: 120px;
   margin: 0 8px;
   border-radius: 8px;
   overflow: hidden;
   background: #E3E8EC;

   ${breakpointSm} {
      max-width: none;
   }
`;

const InnerBar = styled.div`
   position: absolute;
   height: 100%;
   left: 0;
   width: ${props => props.value / props.max * 100}%;
   background: #0B77E9;
   border-radius: 8px;
`;

const BarText = styled.h3`
   font-size: 13px;
   font-weight: normal;
   min-width: 32px;
   text-align: left;
   margin: 0;
`;


const ReviewBar = ({ count, numReviews, index }) => {
   const percentage = numReviews === 0 ? 0 : Math.round(count / numReviews * 100);

   return (
      <BarContainer>
         {/* Translators: %1: number. Next to a count of reviews (%1 > 1) having that many stars. */}
         <BarText active={count > 0}>{___p(index, '1 star', '%1 star', index)}</BarText>
         <Bar>
            <InnerBar value={count} max={numReviews} />
         </Bar>
         <BarText active={count > 0}>{`${percentage}%`}</BarText>
      </BarContainer>
   );
};

export default ReviewBar;
