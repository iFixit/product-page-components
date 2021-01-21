import React, { useCallback } from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';
import { color, space } from '@core-ds/primitives';

const ToggleElem = styled.input`
   appearance: none;
   position: relative;
   width: 1.75rem;
   height: 1rem;
   margin: 0;
   border-radius: 10px;
   background-color: ${props => (props.checked ? color.blue : color.gray4)};
   cursor: pointer;
   transition: background-color 0.2s ease-in-out;

   ::after {
      content: '';
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 100%;
      background-color: ${color.white};
      position: absolute;
      margin: 0.125rem;
      top: 0;
      left: ${props => (props.checked ? space[3] : 0)};
      transition: left 0.2s ease-in-out;
   }

   :hover,
   :active {
      outline: none;
   }
`;

const ToggleContainer = styled.div`
   display: flex;
   align-items: center;
`;

const ToggleLabel = styled.label`
   font-size: 0.875rem;
   line-height: 1rem;
   margin-left: ${space[2]};
   cursor: pointer;
`;

const Toggle = ({ checked, label, onChange, ...props }) => {
   const toggleEntered = useCallback(e => e.key === 'Enter' && onChange(), [onChange]);

   return (
      <ToggleContainer {...props}>
         <ToggleElem
            type="checkbox"
            checked={checked}
            onChange={onChange}
            onKeyDown={toggleEntered}
         />
         <ToggleLabel onClick={onChange}>{label}</ToggleLabel>
      </ToggleContainer>
   );
};

Toggle.propTypes = {
   checked: bool.isRequired,
   label: string,
   onChange: func.isRequired,
};

export default Toggle;
