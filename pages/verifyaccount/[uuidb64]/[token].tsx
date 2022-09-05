import { ReactElement, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

import { AuthContainer, CFContainer } from 'styles/containers';
import { VerifyAccountForm } from 'views/features/VerifyAccount';

const PasswordChanged = dynamic(() => import('views/features/VerifyAccount/PasswordChanged'));

const ChangePassword = () => {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const renderContent = useMemo(() => {
    return isPasswordChanged ? (
      <PasswordChanged />
    ) : (
      <VerifyAccountForm setIsPasswordChanged={setIsPasswordChanged} />
    );
  }, [isPasswordChanged]);

  return (
    <AuthContainer>
      <CFContainer gap={44}>{renderContent}</CFContainer>
    </AuthContainer>
  );
};

ChangePassword.getLayout = (page: ReactElement) => <>{page}</>;

export default ChangePassword;
