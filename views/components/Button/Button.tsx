import type { FC, MouseEventHandler, ReactNode } from 'react';

import { StyledButton } from 'styles/buttons';
import { IS_DEV } from 'utils/constants/common';

import Loader from '../Loader';

interface Props {
  view?: 'primary' | 'secondary' | 'outlined';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  dataTestId: string;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({
  view = 'primary',
  fullWidth = false,
  type = 'button',
  dataTestId,
  disabled,
  isLoading,
  icon,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      className={`${view} ${fullWidth && 'full-width'}`}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      data-testid={IS_DEV && dataTestId}
    >
      {isLoading ? <Loader /> : icon}
      {children}
    </StyledButton>
  );
};

export default Button;
