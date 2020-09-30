import React, { useState } from 'react';
import styled from 'styled-components';
import { _js } from '@ifixit/localize';
import { Button, TextField } from '@ifixit/toolbox';
import { color } from '@core-ds/primitives';
import Status, { StatusType } from './status';
import { post } from '../api';

/**
 * Because we have three components with different heights that swap their
 * displays on and off, we need to hard-code the container's height to be the
 * same as the height of the biggest component (in this case the confirmation)
 * in order to keep the overall size constant.
 */
const NotifyContainer = styled.div`
   position: relative;
   height: 56px;
`;

const InitialBanner = styled.span`
   position: absolute;
   width: 100%;
   justify-content: space-between;
   display: ${({ stage }) => (stage === notifyStage.INITIAL ? 'flex' : 'none')};
`;

const OutOfStock = styled.span`
   display: flex;
   align-items: center;
   color: ${color.red};
`;

const EmailForm = styled.form`
   position: absolute;
   display: ${({ stage }) => (stage === notifyStage.INPUT ? 'flex' : 'none')};

   .text-field {
      padding-right: 10px;
   }
`;

const HidableStatus = styled(Status)`
   position: absolute;
   width: 100%;
   box-sizing: border-box;
   display: ${({ stage }) => (stage === notifyStage.CONFIRMATION ? 'block' : 'none')};
`;

const notifyStage = {
   INITIAL: 'initial',
   INPUT: 'input',
   CONFIRMATION: 'confirmation',
};

const defaultConfirmationStatus = {
   successful: true,
   message: "We'll send a message when the product is back in stock.",
};

const NotifyProduct = ({ email, productcode, optionid }) => {
   const [stage, setStage] = useState(notifyStage.INITIAL);
   const [confirmationStatus, setConfirmationStatus] = useState(defaultConfirmationStatus);
   const [formEmail, setFormEmail] = useState(email);

   return (
      <NotifyContainer>
         <InitialBanner stage={stage}>
            <Button design="outline" onClick={() => setStage(notifyStage.INPUT)}>
               Notify me
            </Button>
            <OutOfStock>Out of Stock</OutOfStock>
         </InitialBanner>
         <EmailForm stage={stage}>
            <TextField
               showValidity
               required
               type="email"
               className="text-field"
               value={formEmail}
               placeholder="Enter your email"
               onChange={({ value }) => setFormEmail(value)}
            />
            <Button
               design="primary"
               disabled={!formEmail}
               onClick={event => {
                  event.preventDefault();
                  post('cart/product/notifyWhenInStock', {
                     productcode,
                     optionid,
                     email: formEmail,
                  })
                     .then(() => setStage(notifyStage.CONFIRMATION))
                     .catch(err => {
                        setStage(notifyStage.CONFIRMATION);
                        setConfirmationStatus({
                           successful: false,
                           message: err.message,
                        });
                     });
               }}
            >
               Notify me
            </Button>
         </EmailForm>
         <HidableStatus
            stage={stage}
            type={confirmationStatus.successful ? StatusType.SUCCESS : StatusType.ERROR}
         >
            {confirmationStatus.message}
         </HidableStatus>
      </NotifyContainer>
   );
};

export default NotifyProduct;
