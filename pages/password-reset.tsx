import { ReactElement, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

import { AuthContainer, CFContainer } from 'styles/containers';
import { PasswordResetForm } from 'views/features/PasswordReset';

const EmailSent = dynamic(() => import('views/features/PasswordReset/EmailSent'));

const ResetPass = () => {
  const [email, setEmail] = useState('');

  const renderContent = useMemo(() => {
    return email ? (
      <EmailSent email={email}></EmailSent>
    ) : (
      <PasswordResetForm setIsRequestSent={setEmail} />
    );
  }, [email]);

  return (
    <AuthContainer>
      <CFContainer gap={44}>{renderContent}</CFContainer>
    </AuthContainer>
  );
};

ResetPass.getLayout = (page: ReactElement) => <>{page}</>;

export default ResetPass;
