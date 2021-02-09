import React from 'react';
import styled from 'styled-components';
import Dropdown from '../dropdown';
import LanguageDropdown from './language_dropdown';
import LanguageButton from './language_button';

const LanguageDropdownWrapper = styled(LanguageDropdown)`
   a:hover {
      text-decoration: none;
   }
`;

const LanguageDropdownContainer = ({
   languages,
   translationPreferencesUrl,
   machineTranslationRequested,
   ...tippyOptions
}) => {
   const selectedLanguage = languages.find(language => language.isSelected);

   return (
      <Dropdown icon={<LanguageButton isoCode={selectedLanguage.isoCode} />} {...tippyOptions}>
         <LanguageDropdownWrapper
            translationPreferencesUrl={translationPreferencesUrl}
            machineTranslationEnabled={true}
            machineTranslationRequested={machineTranslationRequested}
            languages={languages}
            isLightTheme={true}
         />
      </Dropdown>
   );
};

export default LanguageDropdownContainer;
