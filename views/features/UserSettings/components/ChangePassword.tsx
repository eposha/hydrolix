import axios from 'axios';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useTranslation } from 'src/hooks/translation';
import { CFContainer, CFLContainer } from 'styles/containers';
import { Button } from 'views/components/Button';
import FieldsErrors from 'views/components/FieldsErrors';
import Input from 'views/components/Input';
import { useToast } from 'views/components/Toast';

const ChangePassword = () => {
  const t = useTranslation();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const { showErrorDirectly, showSuccessNotification } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    const { oldPassword, newPassword, passwordConfirm } = data;

    try {
      const { data } = await axios.put('/change_password', {
        current_password: oldPassword,
        new_password: newPassword,
        confirm_password: passwordConfirm,
      });

      console.log('Data: ', data);
      await showSuccessNotification('Your password successfully changed');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if ((error as ChangePasswordResponceError).error.current_password) {
        showErrorDirectly('Invalid current password', 'Error');
      } else console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CFContainer>
        <Controller
          rules={{
            required: t.profile.changePass.errors.oldPassRequired,
            validate: (value) => typeof value === 'string',
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              id="old-password-input"
              type="password"
              placeholder={t.profile.changePass.oldPass}
              dataTestId="old-password-input"
              error={!!errors.oldPassword}
            />
          )}
          control={control}
          name="oldPassword"
          defaultValue={''}
        />
        <Controller
          rules={{
            required: t.profile.changePass.errors.newPassRequired,
            validate: (value) => typeof value === 'string',
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              id="new-password-input"
              type="password"
              placeholder={t.profile.changePass.newPass}
              dataTestId="new-password-input"
              error={!!errors.newPassword}
            />
          )}
          control={control}
          name="newPassword"
          defaultValue={''}
        />
        <Controller
          rules={{
            required: t.profile.changePass.errors.repeatPassRequired,
            validate: (value) =>
              value === watch('newPassword') || t.profile.changePass.errors.notMatch,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              id="repeat-new-password-input"
              type="password"
              placeholder={t.profile.changePass.repeatPass}
              dataTestId="repeat-new-password-input"
              error={!!errors.passwordConfirm}
            />
          )}
          control={control}
          name="passwordConfirm"
          defaultValue={''}
        />
        <FieldsErrors errors={errors} />
        <CFLContainer>
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

export default ChangePassword;
