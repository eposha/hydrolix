import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';

import { setUserCookies } from 'utils/cookies';
import { AuthContainer, CFContainer } from 'styles/containers';
import Input from 'views/components/Input';
import { useTranslation } from 'src/hooks/translation';
import Logo from 'views/components/Logo';
import { ROUTES } from 'utils/constants/routes';
import { Button, TextButton } from 'views/components/Button';
import FieldsErrors from 'views/components/FieldsErrors';

const Login = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
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
    const { username, password } = data;
    try {
      const { data } = await axios.post<User>('/login', { username, password });

      setUserCookies(data);

      // got from customer code / need investigate
      // if (data.orgs.length >= 1 && data.orgs[0].type === 'singletenant') {
      //   const { data: organization } = await axios.get(`/orgs/${data.orgs[0].uuid}/summary`);
      // }

      await mutate(`/users/${data.uuid}`, data, false);

      const { prevUrl } = router.query;
      if (prevUrl) {
        return router.push(prevUrl as string);
      }

      router.push(ROUTES.main);
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

  const handleNavigateToRestorePassword = () => {
    router.push(ROUTES.passwordReset);
  };

  return (
    <AuthContainer>
      <CFContainer gap={44}>
        <Logo />
        <CFContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CFContainer>
              <Controller
                rules={{
                  required: t.auth.login.errors.emailRequired,
                  pattern: {
                    value: /^[\w -.]+@([\w -]+\.)+[\w -]{2,8}$/,
                    message: t.auth.login.errors.emailFormat,
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    id="auth-email-input"
                    placeholder={t.auth.login.email}
                    dataTestId="auth-email-input"
                    error={!!errors.username}
                  />
                )}
                control={control}
                name="username"
                defaultValue={''}
              />
              <Controller
                rules={{
                  required: t.auth.login.errors.passwordRequired,
                  validate: (value) => typeof value === 'string',
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    id="auth-password-input"
                    type="password"
                    placeholder={t.auth.login.password}
                    dataTestId="auth-password-input"
                    error={!!errors.password}
                  />
                )}
                control={control}
                name="password"
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
                dataTestId="login-form-submit-button"
              >
                {t.auth.login.BTN}
              </Button>
            </CFContainer>
          </form>
          <TextButton
            onClick={handleNavigateToRestorePassword}
            dataTestId="navigate-to-password-reset-button"
          >
            {t.auth.login.forgotPass}
          </TextButton>
        </CFContainer>
      </CFContainer>
    </AuthContainer>
  );
};

Login.getLayout = (page: ReactElement) => <>{page}</>;

export default Login;
