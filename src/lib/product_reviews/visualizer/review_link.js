import React from 'react';
import styled from 'styled-components';
import { Button, constants } from '@ifixit/toolbox';

const { spacing } = constants;

const Container = styled.div`
   margin-top: ${spacing[4]};
`;

const ReviewLink = ({ itemcode, translate, reviewsLink }) => {
   const url = `${reviewsLink}/${itemcode}`;

   return (
      <Container>
         <Button href={url} fullWidth design="primary">{translate('Write a product review')}</Button>
      </Container>
   );
};

export default ReviewLink;
