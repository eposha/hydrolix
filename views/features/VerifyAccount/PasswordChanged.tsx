import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { useTranslation } from 'src/hooks/translation';
import { CFContainer } from 'styles/containers';
import { Text } from 'styles/typography';
import { ROUTES } from 'utils/constants/routes';
import { Button } from 'views/components/Button';

const PasswordChanged: FC = () => {
  const router = useRouter();
  const t = useTranslation();

  const handleNavigateToLogin = () => {
    router.push(ROUTES.login);
  };

  return (
    <CFContainer gap={21}>
      <Image src="/icons/other/success.svg" width={64} height={64} alt="success icon" />
      <CFContainer gap={14}>
        <Text size="xl" className="bold centered">
          {t.auth.changePass.success.title}
        </Text>
        <CFContainer gap={35}>
          <Text size="lg" className="centered">
            {t.auth.changePass.success.text}
          </Text>
          <Button
            fullWidth
            onClick={handleNavigateToLogin}
            dataTestId="password-changed-go-to-login-button"
          >
            {t.auth.changePass.success.BTN}
          </Button>
        </CFContainer>
      </CFContainer>
    </CFContainer>
  );
};

export default PasswordChanged;
