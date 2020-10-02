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
   display: flex;
   position: absolute;
   width: 100%;
   justify-content: space-between;

   transition: opacity 0.5s;

   visibility: ${({ stage }) => (stage === notifyStage.INITIAL ? 'visible' : 'hidden')};
   opacity: ${({ stage }) => (stage === notifyStage.INITIAL ? 1 : 0)};
`;

const OutOfStock = styled.span`
   display: flex;
   align-items: center;
   color: ${color.red};
`;

const EmailForm = styled.form`
   position: absolute;
   display: flex;

   transition: all 0.5s;

   ${({ stage }) => (stage === notifyStage.INITIAL ? 'transform: translateX(-100%);' : '')}
   visibility: ${({ stage }) => (stage === notifyStage.INPUT ? 'visible' : 'hidden')};
   opacity: ${({ stage }) => (stage === notifyStage.CONFIRMATION ? 0 : 1)};

   .text-field {
      padding-right: 10px;
   }
`;

const HidableStatus = styled(Status)`
   position: absolute;
   width: 100%;
   box-sizing: border-box;

   transition: transform 0.5s;

   transform: ${({ stage }) =>
      stage === notifyStage.CONFIRMATION ? 'translateX(0)' : 'translateX(-100%)'};
   visibility: ${({ stage }) => (stage === notifyStage.CONFIRMATION ? 'visible' : 'hidden')};
`;

const notifyStage = {
   INITIAL: 'initial',
   INPUT: 'input',
   CONFIRMATION: 'confirmation',
};

const defaultConfirmationStatus = {
   type: StatusType.SUCCESS,
   message: _js("We'll send a message when the product is back in stock."),
};

const notifyText = _js('Notify me');
const outOfStockText = _js('Out of Stock');

const NotifyProduct = ({ email, sku, salesChannelID }) => {
   const [stage, setStage] = useState(notifyStage.INITIAL);
   const [confirmationStatus, setConfirmationStatus] = useState(defaultConfirmationStatus);
   const [formEmail, setFormEmail] = useState(email);
   const [buttonClicked, setButtonClicked] = useState(false);
   sku = '' + sku;

   const sendNotifyRequest = () => {
      post('cart/product/notifyWhenInStock', {
         productcode: sku.substring(0, 6),
         optionid: sku[6],
         email: formEmail,
         sales_channelid: salesChannelID,
      })
         .then(response => {
            setStage(notifyStage.CONFIRMATION);
            if (!response.ok) {
               response.json().then(responseBody => {
                  setConfirmationStatus({
                     type: StatusType.ERROR,
                     message: responseBody.message,
                  });
               });
            }
         })
         .catch(err => {
            setStage(notifyStage.CONFIRMATION);
            setConfirmationStatus({
               type: StatusType.ERROR,
               message: err.message,
            });
         });
   };

   return (
      <NotifyContainer>
         <InitialBanner stage={stage}>
            <Button design="outline" onClick={() => setStage(notifyStage.INPUT)}>
               {notifyText}
            </Button>
            <OutOfStock>{outOfStockText}</OutOfStock>
         </InitialBanner>
         <EmailForm stage={stage}>
            <TextField
               showValidity
               required
               type="email"
               className="text-field"
               value={formEmail}
               placeholder={_js('Enter your email')}
               onChange={({ value }) => setFormEmail(value)}
            />
            <Button
               design="primary"
               disabled={buttonClicked || !formEmail}
               onClick={event => {
                  event.preventDefault();
                  setButtonClicked(true);
                  sendNotifyRequest();
               }}
            >
               {notifyText}
            </Button>
         </EmailForm>
         <HidableStatus stage={stage} type={confirmationStatus.type}>
            {confirmationStatus.message}
         </HidableStatus>
      </NotifyContainer>
   );
};

export default NotifyProduct;
