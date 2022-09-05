import Image from 'next/image';
import { ChangeEventHandler, FC } from 'react';

import {
  InputContainer,
  InputIconWrapper,
  InputLabel,
  InputRightText,
  StyledInput,
} from 'styles/inputs';
import { IS_DEV } from 'utils/constants/common';

interface Props {
  id: string;
  type?: 'text' | 'email' | 'password' | 'search' | 'tel';
  value: string;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  dataTestId: string;
  rightText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<Props> = ({
  id,
  type = 'text',
  value,
  placeholder,
  label = '',
  disabled,
  error = false,
  className,
  dataTestId,
  rightText,
  onChange,
}) => {
  return (
    <InputContainer className={className}>
      <InputLabel htmlFor={id} show={!!value} error={error}>
        {label || placeholder}
      </InputLabel>
      <StyledInput
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        data-testid={IS_DEV && dataTestId}
        onChange={onChange}
      />
      <InputIconWrapper>
        {rightText && <InputRightText>{rightText}</InputRightText>}
        {error && <Image src="/icons/other/error.svg" width={14} height={14} alt="icon" />}
      </InputIconWrapper>
    </InputContainer>
  );
};

export default Input;
