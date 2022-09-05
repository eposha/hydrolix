import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useClickOutside } from 'src/hooks/clickOutside';
import { Portal } from 'views/components/Portal';
import { CFContainer } from 'styles/containers';
import { H5 } from 'styles/typography';
import * as UI from 'styles/add-new-sidebar';

interface IAddNewSidebar {
  onClose: () => void;
  title: string;
  isNotCloseOnChange?: boolean;
  children: React.ReactNode;
}

const AdditionalSidebar: FC<IAddNewSidebar> = ({
  onClose,
  title,
  children,
  isNotCloseOnChange,
}) => {
  const router = useRouter();

  const portalRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: portalRef, onClickOutside: onClose, closeOnEsc: true });

  useEffect(() => {
    if (isNotCloseOnChange) return;

    router.events.on('routeChangeStart', onClose);

    return () => {
      router.events.off('routeChangeStart', onClose);
    };
  }, [isNotCloseOnChange, onClose, router]);

  return (
    <Portal>
      <>
        <UI.Background />
        <UI.AdditionalSidebar ref={portalRef}>
          <UI.Header>
            <H5>{title}</H5>
            <UI.CloseIconWrapper onClick={onClose}>
              <Image src={'/icons/common/Close.svg'} width={32} height={32} alt="close" />
            </UI.CloseIconWrapper>
          </UI.Header>
          <CFContainer width="100%" gap={10}>
            {children}
          </CFContainer>
        </UI.AdditionalSidebar>
      </>
    </Portal>
  );
};

export default AdditionalSidebar;
