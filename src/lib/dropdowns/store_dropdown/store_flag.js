import React from 'react';
import { ReactComponent as USFlag } from './flags/us.svg';
import { ReactComponent as AUFlag } from './flags/au.svg';
import { ReactComponent as CAFlag } from './flags/ca.svg';
import { ReactComponent as DEFlag } from './flags/de.svg';
import { ReactComponent as FRFlag } from './flags/fr.svg';
import { ReactComponent as GBFlag } from './flags/gb.svg';
import { ReactComponent as EUFlag } from './flags/eu.svg';

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
