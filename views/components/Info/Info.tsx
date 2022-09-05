import Image from 'next/image';
import type { FC } from 'react';

import { InfoContainer } from 'styles/notifications';

interface Props {
  type?: NotificationType;
  message: string;
  children?: string | JSX.Element;
}

const FieldErrors: FC<Props> = ({ type = 'error', message, children }) => {
  const iconSrc = `/icons/notifications/info/${type}.svg`;

  return (
    <InfoContainer className={type}>
      <Image src={iconSrc} width={20} height={20} alt={'icon'} />
      {message}
      {children}
    </InfoContainer>
  );
};

export default FieldErrors;
