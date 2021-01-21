import React from 'react';
import styled from 'styled-components';
import { space } from '@core-ds/primitives';
import LanguageCard from './language_card';
import Language from './language';
import withLanguageForm from './with_language_form';
import LanguageThemeProvider from './language_theme_provider';
import MachineTranslationToggle from './machine_translation_toggle';
import {
   DropdownContainer,
   CardColumnContainer,
   CardColumn as RightColumn,
} from '../card_dropdown_parts';

const LeftColumn = styled(RightColumn)`
   padding-right: ${space[6]};
`;

interface LanguageContainerProps {
   leftColumn: Array<Language>;
   rightColumn: Array<Language>;
   onClickLanguage: (langId: string) => void;
   onClickMachineTranslate: () => void;
   machineTranslationEnabled: boolean;
   machineTranslationRequested: boolean;
}

const LanguageContainer: React.FunctionComponent<LanguageContainerProps> = ({
   leftColumn,
   rightColumn,
   onClickLanguage,
   onClickMachineTranslate,
   machineTranslationEnabled,
   machineTranslationRequested,
}) => (
   <React.Fragment>
      <CardColumnContainer>
         <LeftColumn>
            {leftColumn.map((language: Language) => (
               <LanguageCard
                  key={language.isoCode}
                  language={language}
                  onClickLanguage={onClickLanguage}
               />
            ))}
         </LeftColumn>
         <RightColumn>
            {rightColumn.map((language: Language) => (
               <LanguageCard
                  key={language.isoCode}
                  language={language}
                  onClickLanguage={onClickLanguage}
               />
            ))}
         </RightColumn>
      </CardColumnContainer>
      {machineTranslationEnabled && (
         <MachineTranslationToggle
            machineTranslationRequested={machineTranslationRequested}
            onChange={onClickMachineTranslate}
         />
      )}
   </React.Fragment>
);

const LanguageContainerWithForm = withLanguageForm(LanguageContainer);

interface LanguageDropdownProps {
   className: string;
   translationPreferencesUrl: string;
   machineTranslationEnabled: boolean;
   machineTranslationRequested: boolean;
   languages: Array<Language>;
   isLightTheme: boolean;
   mobile: boolean;
}

export default class LanguageDropdown extends React.Component<LanguageDropdownProps> {
   public static defaultProps = {
      mobile: false,
   };

   constructor(props: LanguageDropdownProps) {
      super(props);
   }

   render() {
      const {
         className,
         languages,
         translationPreferencesUrl,
         machineTranslationEnabled,
         machineTranslationRequested,
         isLightTheme,
         mobile,
      } = this.props;

      const leftColumn = [];
      const rightColumn = [];

      for (let index = 0; index < languages.length; index++) {
         if (index % 2 === 0) {
            // @ts-ignore
            leftColumn.push(languages[index]);
         } else {
            // @ts-ignore
            rightColumn.push(languages[index]);
         }
      }

      return (
         <LanguageThemeProvider isLightTheme={isLightTheme} mobile={mobile}>
            <DropdownContainer className={className}>
               <LanguageContainerWithForm
                  leftColumn={leftColumn}
                  rightColumn={rightColumn}
                  translationPreferencesUrl={translationPreferencesUrl}
                  machineTranslationRequested={machineTranslationRequested}
                  machineTranslationEnabled={machineTranslationEnabled}
               />
            </DropdownContainer>
         </LanguageThemeProvider>
      );
   }
}
