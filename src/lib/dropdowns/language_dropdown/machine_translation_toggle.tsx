import React from 'react';
import styled from 'styled-components';
import { space } from '@core-ds/primitives';
import Toggle from './toggle';
import { _js } from '@ifixit/localize';

interface MachineTranslationToggleProps {
   className?: string;
   onChange: Function;
   machineTranslationRequested: boolean;
}

const MachineTranslationContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding: ${space[5]} ${({ theme }) => theme.dropdownSidePadding};
   color: ${({ theme }) => theme.machineTranslation};
   border-top: 1px solid ${({ theme }) => theme.machineTranslationBorder};
   font-size: ${({ theme }) => theme.fontSize};
   color: ${({ theme }) => theme.mainText};
`;

const MachineTranslationLabel = styled.span`
   font-weight: bold;
`;

const MachineTranslationToggle: React.FunctionComponent<MachineTranslationToggleProps> = ({
   machineTranslationRequested,
   onChange,
   className,
}) => (
   <MachineTranslationContainer className={className}>
      <MachineTranslationLabel>{_js('Machine Translation')}</MachineTranslationLabel>
      <Toggle
         checked={machineTranslationRequested}
         label={machineTranslationRequested ? _js('On') : _js('Off')}
         onChange={onChange}
      />
   </MachineTranslationContainer>
);

export default MachineTranslationToggle;
