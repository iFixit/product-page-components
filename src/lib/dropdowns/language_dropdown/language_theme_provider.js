import React from 'react';
import { ThemeProvider } from 'styled-components';
import { color, fontSize, space } from '@core-ds/primitives';
import { merge } from 'lodash';
import { useMediaQuery } from 'react-responsive';

const baseTheme = {
   fontSize: fontSize[1],
   dropdownTopBottomPadding: space[5],
   dropdownSidePadding: space[6],
   cardPadding: space[2],
};

const lightTheme = {
   ...baseTheme,
   background: color.white,
   mainText: color.gray6,
   isoCode: {
      standard: {
         border: color.gray3,
      },
      hover: {
         font: color.white,
         background: color.blueLight1,
         border: color.blueLight1,
      },
      selected: {
         font: color.gray1,
         background: color.blue,
         border: color.blue,
      },
   },
   languageNameHover: color.gray5,
   machineTranslation: color.gray6,
   machineTranslationBorder: color.gray2,
};

const darkTheme = {
   ...baseTheme,
   background: '#222222',
   mainText: color.gray3,
   isoCode: {
      standard: {
         border: color.gray6,
      },
      hover: {
         font: color.gray8,
         background: color.gray1,
         border: color.gray1,
      },
      selected: {
         font: color.gray8,
         background: color.gray4,
         border: color.gray4,
      },
   },
   languageNameHover: color.white,
   machineTranslation: color.gray2,
   machineTranslationBorder: '#3D3D3D',
};

const makeMobile = (theme, smallFont) => ({
   ...merge(theme, {
      fontSize: smallFont ? fontSize[1] : fontSize[2],
      dropdownTopBottomPadding: space[4],
      dropdownSidePadding: space[4],
      mainText: color.gray8,
      isoCode: {
         standard: {
            border: color.gray6,
         },
      },
      cardPadding: space[3],
   }),
});

const LanguageThemeProvider = ({ isLightTheme, mobile, children }) => {
   const smallFont = useMediaQuery({ maxWidth: '350px' });

   let theme = isLightTheme ? lightTheme : darkTheme;

   if (mobile) {
      theme = makeMobile(theme, smallFont);
   }

   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default LanguageThemeProvider;
