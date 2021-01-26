import React, { createRef } from 'react';

const withLanguageForm = LanguagesContainer => {
   return props => {
      const languageForm = createRef();
      const languageInput = createRef();
      const machineTranslationInput = createRef();

      const onClickLanguage = clickedLangId => {
         languageInput.current.value = clickedLangId;
         languageForm.current.submit();
      };

      const onClickMachineTranslate = () => {
         machineTranslationInput.current.value = !props.machineTranslationRequested ? 'on' : '';
         languageForm.current.submit();
      };

      return (
         <React.Fragment>
            <LanguagesContainer
               {...props}
               onClickLanguage={onClickLanguage}
               onClickMachineTranslate={onClickMachineTranslate}
            />
            <form ref={languageForm} method="POST" action={props.translationPreferencesUrl}>
               <input ref={languageInput} type="hidden" name="langid" value={''} />
               <input
                  ref={machineTranslationInput}
                  type="hidden"
                  name="machineTranslate"
                  value={props.machineTranslationRequested ? 'on' : ''}
               />
            </form>
         </React.Fragment>
      );
   };
};

export default withLanguageForm;
