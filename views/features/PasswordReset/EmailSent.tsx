import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { useTranslation } from 'src/hooks/translation';
import { CFContainer } from 'styles/containers';
import { Text } from 'styles/typography';
import { ROUTES } from 'utils/constants/routes';
import { Button } from 'views/components/Button';

interface Props {
  email: string;
}

const EmailSent: FC<Props> = ({ email }) => {
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
          {t.auth.resetPass.success.title}
        </Text>
        <CFContainer gap={35}>
          <Text size="lg" className="centered">
            {t.auth.resetPass.success.text + email}
          </Text>
          <Button fullWidth onClick={handleNavigateToLogin} dataTestId="email-sent-return-button">
            {t.auth.resetPass.success.BTN}
          </Button>
        </CFContainer>
      </CFContainer>
    </CFContainer>
  );
};

export default EmailSent;
