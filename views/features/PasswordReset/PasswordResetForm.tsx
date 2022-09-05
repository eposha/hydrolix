import axios from 'axios';
import Link from 'next/link';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';

import { useTranslation } from 'src/hooks/translation';
import { CFContainer } from 'styles/containers';
import { NavLink } from 'styles/link';
import { Text } from 'styles/typography';
import { ROUTES } from 'utils/constants/routes';
import { Button } from 'views/components/Button';
import Input from 'views/components/Input';
import Logo from 'views/components/Logo';

const FieldsErrors = dynamic(() => import('views/components/FieldsErrors'));

interface Props {
  setIsRequestSent: Dispatch<SetStateAction<string>>;
}

const PasswordResetForm: FC<Props> = ({ setIsRequestSent }) => {
  const t = useTranslation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [responseError, setResponseError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setResponseError({});
    setIsLoading(true);
    const { email } = data;
    try {
      await axios.post('/reset_password', { email });

      setIsRequestSent(email);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setResponseError({
        response: {
          message: (error as ResponceError).error?._error?.message || 'Something went wrong',
        },
      });
    }
  };

  return (
    <>
      <Logo />
      <CFContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CFContainer>
            <Text size="lg">{t.auth.resetPass.text}</Text>
            <Controller
              rules={{
                required: t.auth.resetPass.errors.emailRequired,
                pattern: {
                  value: /^[\w -.]+@([\w -]+\.)+[\w -]{2,8}$/,
                  message: t.auth.resetPass.errors.emailFormat,
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  id="auth-email-input"
                  placeholder={t.auth.resetPass.email}
                  dataTestId="auth-email-input"
                  error={!!errors.email}
                />
              )}
              control={control}
              name="email"
              defaultValue={''}
            />
            <FieldsErrors errors={errors} />
            <FieldsErrors errors={responseError} />
            <Button
              type="submit"
              view="primary"
              fullWidth
              disabled={isLoading}
              isLoading={isLoading}
              dataTestId="reset-password-form-submit-button"
            >
              {t.auth.resetPass.BTN}
            </Button>
          </CFContainer>
        </form>
        <Text size="md">
          {t.auth.resetPass.linkToSignIn.text}
          <Link href={ROUTES.login} passHref>
            <NavLink>{t.auth.resetPass.linkToSignIn.link}</NavLink>
          </Link>
        </Text>
      </CFContainer>
    </>
  );
};

export default PasswordResetForm;
