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

const HidableStatus = styled(Status)`
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
         <InitialBanner visible={stage === notifyStage.INITIAL}>
            <Button design="outline" onClick={() => setStage(notifyStage.INPUT)}>
               Notify me
            </Button>
            <OutOfStock>Out of Stock</OutOfStock>
         </InitialBanner>
         <EmailForm visible={stage === notifyStage.INPUT}>
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
            visible={stage === notifyStage.CONFIRMATION}
            type={confirmationStatus.successful ? StatusType.SUCCESS : StatusType.ERROR}
         >
            {confirmationStatus.message}
         </HidableStatus>
      </NotifyContainer>
   );
};

export default NotifyProduct;
