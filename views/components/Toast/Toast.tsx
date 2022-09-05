import Image from 'next/image';
import { FC, useCallback } from 'react';

import * as UI from 'styles/notifications';
import { InlineText } from 'styles/typography';

interface Props {
  toastList: IToast[];
  position?: ToastPosition;
  removeToast: (id: string) => void;
}

const Toast: FC<Props> = ({ toastList, position = 'bottom-right', removeToast }) => {
  const handleToastClose = useCallback(
    (id?: string) => {
      if (id) removeToast(id);
    },
    [removeToast],
  );

  return (
    <UI.Toasts className={position}>
      {toastList.map(({ id, type, title, text }) => {
        const iconSrc = `/icons/notifications/${type}.svg`;

        return (
          <UI.Container key={id} className={position}>
            <UI.Icon
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                handleToastClose(id);
              }}
            >
              <path d="M16.5 5.5L5.5 16.5" />
              <path d="M5.5 5.5L16.5 16.5" />
            </UI.Icon>
            <UI.IconContainer>
              <Image src={iconSrc} width={20} height={20} alt={'icon'} />
            </UI.IconContainer>
            <UI.Title>
              <InlineText size="md">{title || text}</InlineText>
            </UI.Title>
            <UI.Content>
              <InlineText size="sm">{title && text}</InlineText>
            </UI.Content>
          </UI.Container>
        );
      })}
    </UI.Toasts>
  );
};

export default Toast;
