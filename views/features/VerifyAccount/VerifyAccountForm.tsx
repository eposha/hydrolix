import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  setIsPasswordChanged: Dispatch<SetStateAction<boolean>>;
}

const VerifyAccountForm: FC<Props> = ({ setIsPasswordChanged }) => {
  const router = useRouter();
  const t = useTranslation();

  const { uuidb64, token } = router.query; //TODO: what action needed if query are empty?

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const [responseError, setResponseError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setResponseError({});
    setIsLoading(true);
    const { password, passwordConfirm } = data;

    try {
      const { data } = await axios.post('password_reset_confirm/', {
        password,
        password_confirm: passwordConfirm,
        uuidb64,
        token,
      });
      if (data.success) setIsPasswordChanged(true);
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
            <Controller
              rules={{
                required: t.auth.changePass.errors.newPassRequired,
                validate: (value) => typeof value === 'string',
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  id="auth-password-input"
                  type="password"
                  placeholder={t.auth.changePass.newPass}
                  dataTestId="auth-password-input"
                  error={!!errors.password}
                />
              )}
              control={control}
              name="password"
              defaultValue={''}
            />
            <Controller
              rules={{
                required: t.auth.changePass.errors.repeatPassRequired,
                validate: (value) =>
                  value === watch('password') || t.auth.changePass.errors.notMatch,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  id="auth-repeat-password-input"
                  type="password"
                  placeholder={t.auth.changePass.repeatPass}
                  dataTestId="auth-repeat-password-input"
                  error={!!errors.passwordConfirm}
                />
              )}
              control={control}
              name="passwordConfirm"
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
              dataTestId="change-password-form-submit-button"
            >
              {t.auth.changePass.BTN}
            </Button>
          </CFContainer>
        </form>
        <Text size="md">
          {t.auth.changePass.linkToSignIn.text}
          <Link href={ROUTES.login} passHref>
            <NavLink>{t.auth.changePass.linkToSignIn.link}</NavLink>
          </Link>
        </Text>
      </CFContainer>
    </>
  );
};

export default VerifyAccountForm;
