import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslation } from 'src/hooks/translation';
import { CFContainer, CFLContainer } from 'styles/containers';
import { DropDownOptionContainer } from 'styles/inputs';
import { Text } from 'styles/typography';
import { Button } from 'views/components/Button';
import DropDown from 'views/components/DropDown';
import { useToast } from 'views/components/Toast';
import EnIcon from 'public/icons/languages/en.svg';

const PersonalSettings = () => {
  const t = useTranslation();
  const { handleSubmit } = useForm();

  const { showError, showSuccessNotification } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      console.log('Data: ', data);
      await showSuccessNotification('language successfully changed');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      showError(error as ResponceError);
    }
  };

  const languageSelectOptions = [
    {
      value: 'en',
      label: (
        <DropDownOptionContainer>
          <EnIcon />
          <Text>English</Text>
        </DropDownOptionContainer>
      ),
    },
  ];

  const setLanguage = () => {
    console.log('language changed!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CFContainer>
        <CFLContainer>
          <DropDown
            options={languageSelectOptions}
            onChange={setLanguage}
            placeholder="language"
            value={languageSelectOptions[0]}
            dataTestId="language"
          />
          <Button
            type="submit"
            view="primary"
            disabled={isLoading}
            isLoading={isLoading}
            dataTestId="change-password-form-submit-button"
          >
            {t.profile.changePass.updateBTN}
          </Button>
        </CFLContainer>
      </CFContainer>
    </form>
  );
};

export default PersonalSettings;
