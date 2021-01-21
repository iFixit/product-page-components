import React, { useCallback } from 'react';
import styled from 'styled-components';
import { space, borderRadius, fontSize } from '@core-ds/primitives';
import Language from './language';
import { CardLink } from '../card_dropdown_parts';

const toolbox: any = require('@ifixit/toolbox');

const LanguageButton = styled(CardLink)`
   :hover > .iso-code {
      color: ${({ theme }) => theme.isoCode.hover.font};
      background-color: ${({ theme }) => theme.isoCode.hover.background};
      border-color: ${({ theme }) => theme.isoCode.hover.border};
   }

   :hover > .language-name {
      color: ${({ theme }) => theme.languageNameHover};
   }
`;

interface LanguageIsoCodeProps {
   isSelected: boolean;
}

const LanguageIsoCode = styled.div<LanguageIsoCodeProps>`
   display: flex;
   color: ${({ isSelected, theme }) => (isSelected ? theme.isoCode.selected.font : theme.mainText)};
   background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.isoCode.selected.background : 'transparent'};
   line-height: inherit;
   font-size: ${fontSize[0]};
   font-family: 'Overpass Mono', monospace;
   margin-right: ${space[4]};
   padding: 1px 4px;
   border: 1px solid
      ${({ isSelected, theme }) =>
         isSelected ? theme.isoCode.selected.border : theme.isoCode.standard.border};
   border-radius: ${borderRadius.sm};
`;

const LanguageName = styled.div`
   display: flex;
   color: ${({ theme }) => theme.mainText};
   font-size: ${({ theme }) => theme.fontSize};
   line-height: inherit;
`;

interface LanguageCardProps {
   language: Language;
   className?: string;
   onClickLanguage: (langid: string) => void;
}

const LanguageCard: React.FunctionComponent<LanguageCardProps> = ({
   language,
   onClickLanguage,
   className,
}) => {
   const { isoCode, autoglottonym, isSelected } = language;
   const langid = isoCode.toLowerCase();

   const buttonClicked = useCallback(() => onClickLanguage(langid), [onClickLanguage, langid]);

   return (
      <LanguageButton href="#" className={className} data-langid={langid} onClick={buttonClicked}>
         <LanguageIsoCode className="iso-code" isSelected={isSelected}>
            {isoCode}
         </LanguageIsoCode>
         <LanguageName className="language-name">{autoglottonym}</LanguageName>
      </LanguageButton>
   );
};

export default LanguageCard;
