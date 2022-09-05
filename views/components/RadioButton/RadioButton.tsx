import { ChangeEvent, FC } from 'react';

import { HiddenRadio, RadioContainer, RadioIcon, RadioLabel, StyledRadio } from 'styles/inputs';
import { Text } from 'styles/typography';
import { IS_DEV } from 'utils/constants/common';

interface Props {
  className?: string;
  name: string;
  label: string;
  value: string;
  selectedValue: string;
  disabled?: boolean;
  dataTestId: string;
  onChange: (value: string) => void;
}

const RadioButton: FC<Props> = ({
  className,
  name,
  value,
  selectedValue,
  label,
  disabled,
  dataTestId,
  onChange,
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <RadioContainer className={className}>
      <RadioLabel disabled={disabled}>
        <HiddenRadio
          name={name}
          value={value}
          checked={value === selectedValue}
          disabled={disabled}
          onChange={handleOnChange}
          data-testid={IS_DEV && dataTestId}
        />
        <StyledRadio checked={value === selectedValue} disabled={disabled}>
          <RadioIcon />
        </StyledRadio>
        <Text size="md">{label}</Text>
      </RadioLabel>
    </RadioContainer>
  );
};

export default RadioButton;
