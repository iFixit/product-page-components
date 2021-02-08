import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippy.js/react';
import { shadow } from '@core-ds/primitives';

const LightTippy = styled(Tippy)`
   min-width: 200px;
   color: black;
   box-shadow: ${shadow[3]};
   padding: 0;
   border-radius: 8px;
   overflow: auto;
   background-color: white;

   .tippy-content {
      display: flex;

      > div {
         flex: 1 1 auto;
      }
   }
`;

const noop = () => {};

const withTippy = ClickableElement => {
   return ({ onMount, content, children, id, ...tippyOptions }) => {
      return (
         <LightTippy
            trigger="click"
            duration={200}
            interactive
            placement="bottom-end"
            flip={false}
            animateFill={false}
            onMount={onMount || noop}
            content={content}
            appendTo="parent"
            {...tippyOptions}
         >
            <ClickableElement
               id={id}
               href="#"
               onClick={e => e.stopPropagation()}
               onKeyDown={e => e.stopPropagation()}
            >
               {children}
            </ClickableElement>
         </LightTippy>
      );
   };
};

export default withTippy;
