import { useRef } from 'react';
import type { FC } from 'react';

import { useClickOutside } from 'src/hooks/clickOutside';
import * as UI from 'styles/modal';
import { H4 } from 'styles/typography';

import { Portal } from '../Portal';

interface Props {
  title: string;
  content: string | React.ReactNode;
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: FC<Props> = ({ title, content, children, setIsOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  useClickOutside({ ref: modalRef, onClickOutside: handleModalClose });

  return (
    <Portal>
      <UI.Shadow>
        <UI.Container ref={modalRef}>
          <UI.Icon
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleModalClose}
          >
            <path d="M16.5 5.5L5.5 16.5" />
            <path d="M5.5 5.5L16.5 16.5" />
          </UI.Icon>
          <H4>{title}</H4>
          <UI.Content>{content}</UI.Content>
          <UI.Footer>{children}</UI.Footer>
        </UI.Container>
      </UI.Shadow>
    </Portal>
  );
};

export default Modal;
