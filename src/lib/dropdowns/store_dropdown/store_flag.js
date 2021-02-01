import React from 'react';
import USFlag from './flags/us';
import AUFlag from './flags/au';
import CAFlag from './flags/ca';
import DEFlag from './flags/de';
import FRFlag from './flags/fr';
import GBFlag from './flags/gb';
import EUFlag from './flags/eu';

const StoreFlag = ({ storeCode, style, id = null }) => {
   const svgProps = {
      style,
      id,
      'data-country': storeCode,
   };

   switch (storeCode.toUpperCase()) {
      case 'AU':
         return <AUFlag {...svgProps} />;
      case 'CA':
         return <CAFlag {...svgProps} />;
      case 'DE':
         return <DEFlag {...svgProps} />;
      case 'FR':
         return <FRFlag {...svgProps} />;
      case 'GB':
         return <GBFlag {...svgProps} />;
      case 'EU':
         return <EUFlag {...svgProps} />;
      case 'US':
      default:
         return <USFlag {...svgProps} />;
   }
};

export default StoreFlag;
