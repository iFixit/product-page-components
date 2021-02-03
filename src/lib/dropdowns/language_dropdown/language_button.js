import React from 'react';
import styled from 'styled-components';
import { color, borderRadius, fontSize, space } from '@core-ds/primitives';
import { string } from 'prop-types';

const Container = styled.div`
   font-family: 'Overpass Mono', monospace;
   font-weight: bold;
   border-radius: ${borderRadius.sm};
   margin: ${space[1]} 0;
   padding: 2px 4px;
   line-height: 1;
   font-size: ${fontSize[0]};
   color: ${color.gray8};
   background-color: ${color.gray4};
   transition: background-color 0.1s;

   :hover {
      background-color: ${color.white};
   }
`;

const LanguageButton = ({ isoCode }) => (
   <Container id="js-iso-language-dropdown-button" focusable="false">
      {isoCode}
   </Container>
);

LanguageButton.propTypes = {
   isoCode: string.isRequired,
};

export default LanguageButton;
