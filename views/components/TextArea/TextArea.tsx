import { ChangeEvent, FC } from 'react';

import { StyledTextArea, TextAreaContainer, TextAreaLabel } from 'styles/inputs';
import { IS_DEV } from 'utils/constants/common';

interface Props {
  value: string;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  dataTestId: string;
  onChange: (value: string) => void;
}

const TextArea: FC<Props> = ({
  value,
  placeholder,
  label = '',
  disabled,
  error = false,
  className,
  dataTestId,
  onChange,
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextAreaContainer className={className}>
      <TextAreaLabel show={!!value} error={error}>
        {label}
      </TextAreaLabel>
      <StyledTextArea
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        data-testid={IS_DEV && dataTestId}
        onChange={handleOnChange}
      />
    </TextAreaContainer>
  );
};

export default TextArea;
