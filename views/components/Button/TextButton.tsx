import type { FC, MouseEventHandler, ReactNode } from 'react';

import { StyledTextButton } from 'styles/buttons';
import { IS_DEV } from 'utils/constants/common';

import Loader from '../Loader';

interface Props {
  view?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  dataTestId: string;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const TextButton: FC<Props> = ({
  view = 'primary',
  type = 'button',
  dataTestId,
  disabled,
  isLoading,
  icon,
  children,
  onClick,
}) => {
  return (
    <StyledTextButton
      className={`${view}`}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      data-testid={IS_DEV && dataTestId}
    >
      {isLoading ? <Loader size={12} /> : icon}
      {children}
    </StyledTextButton>
  );
};

export default TextButton;
