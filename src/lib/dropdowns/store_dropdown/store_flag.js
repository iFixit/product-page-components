import React from 'react';
import USFlag from './flags/USFlag';
import AUFlag from './flags/AUFlag';
import CAFlag from './flags/CAFlag';
import DEFlag from './flags/DEFlag';
import FRFlag from './flags/FRFlag';
import GBFlag from './flags/GBFlag';
import EUFlag from './flags/EUFlag';

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
