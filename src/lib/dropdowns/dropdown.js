import React from 'react';
import styled from 'styled-components';
import { color } from '@core-ds/primitives';
import { Bullet } from '@core-ds/icons/16';
import withTippy from './with_tippy';

const UnstyledButton = styled.a`
   display: inline-block;
   position: relative;
   cursor: pointer;
   overflow: visible;

   svg:first-child {
      transition: color 0.1s;
   }

   :hover {
      text-decoration: none;
      svg:first-child {
         color: ${color.white};
      }

      > div {
         background-color: ${color.white};
      }
   }
`;

const Badge = styled(Bullet)`
   position: absolute;
   top: -8px;
   right: -10px;

   color: ${color.blue};
`;

const UnstyledButtonWithTippy = withTippy(UnstyledButton);

const Dropdown = ({ id, children, icon, hasBadge, ...tippyOptions }) => {
   return (
      <div className="dropdown-and-button-container">
         <UnstyledButtonWithTippy id={id} content={children} {...tippyOptions}>
            {icon}
            {!!hasBadge && <Badge className="headerBadge" />}
         </UnstyledButtonWithTippy>
      </div>
   );
};

Dropdown.defaultProps = {
   onMount: () => {},
};

export default Dropdown;
