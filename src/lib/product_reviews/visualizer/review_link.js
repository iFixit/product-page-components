import React from 'react';
import styled from 'styled-components';
import { Button, constants } from '@ifixit/toolbox';
import { _js } from '@ifixit/localize';

const { spacing } = constants;

const Container = styled.div`
   margin-top: ${spacing[4]};
`;

const ReviewLink = ({ reviewsUrl }) => {
   return (
      <Container>
         <Button href={reviewsUrl} fullWidth design="primary">{_js('Write a product review')}</Button>
      </Container>
   );
};

export default ReviewLink;
