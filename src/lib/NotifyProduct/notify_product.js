import React, { useState } from 'react';
import styled from 'styled-components';
import { _js } from '@ifixit/localize';
import { Button, TextField } from '@ifixit/toolbox';
import { color, borderRadius, space } from '@core-ds/primitives';

/**
 * Because we have three components with different heights that swap their
 * displays on and off, we need to hard-code the container's height to be the
 * same as the height of the biggest component (in this case the confirmation)
 * in order to keep the overall size constant.
 */
const NotifyContainer = styled.div`
   height: 56px;
`;

const InitialBanner = styled.span`
   justify-content: space-between;

   ${({ visible }) =>
      visible
         ? `
      display: flex;
   `
         : `
      display: none;
   `};
`;

const OutOfStock = styled.span`
   display: flex;
   align-items: center;
   color: ${color.red};
`;

const EmailForm = styled.form`
   ${({ visible }) =>
      visible
         ? `
      display: flex;
   `
         : `
      display: none;
   `}

   .text-field {
      padding-right: 10px;
   }
`;

const Confirmation = styled.p`
   margin: 0;
   border: 1px solid #99dab2;
   border-radius: ${borderRadius.md};
   color: #288c4e;
   background-color: #ebf8f0;
   padding: ${space[3]} ${space[3]};
   font-size: 13px;

   ${({ visible }) =>
      visible
         ? `
      display: block;
   `
         : `
      display: none;
   `}
`;

const notifyStage = {
   INITIAL: 'initial',
   INPUT: 'input',
   CONFIRMATION: 'confirmation',
};

const NotifyProduct = ({ email }) => {
   const [stage, setStage] = useState(notifyStage.INITIAL);

   return (
      <NotifyContainer>
         <InitialBanner visible={stage === notifyStage.INITIAL}>
            <Button design="outline" onClick={() => setStage(notifyStage.INPUT)}>
               Notify me
            </Button>
            <OutOfStock>Out of Stock</OutOfStock>
         </InitialBanner>
         <EmailForm visible={stage === notifyStage.INPUT}>
            <TextField className="text-field" value={email} placeholder="Enter your email" />
            <Button
               design="primary"
               onClick={event => {
                  event.preventDefault();
                  setStage(notifyStage.CONFIRMATION);
               }}
            >
               Notify me
            </Button>
         </EmailForm>
         <Confirmation visible={stage === notifyStage.CONFIRMATION}>
            We'll send a message when the product is back in stock.
         </Confirmation>
      </NotifyContainer>
   );
};

export default NotifyProduct;
