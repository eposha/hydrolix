import { ChangeEvent, FC } from 'react';

import { CheckboxContainer, HiddenCheckbox, Icon, Label, StyledCheckbox } from 'styles/inputs';
import { Text } from 'styles/typography';
import { IS_DEV } from 'utils/constants/common';

interface Props {
  className?: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  dataTestId: string;
  onChange: (value: boolean) => void;
}

const Checkbox: FC<Props> = ({
  className,
  checked,
  label = '',
  disabled,
  dataTestId,
  onChange,
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <CheckboxContainer className={className}>
      <Label disabled={disabled}>
        <HiddenCheckbox
          checked={checked}
          disabled={disabled}
          onChange={handleOnChange}
          data-testid={IS_DEV && dataTestId}
        />
        <StyledCheckbox checked={checked} disabled={disabled}>
          <Icon viewBox="0 0 10 8">
            <path d="M8.60001 0L10 1.41L3.47 8L0 4.5L1.39999 3.09001L3.47 5.17L8.60001 0Z" />
          </Icon>
        </StyledCheckbox>
        <Text size="md">{label}</Text>
      </Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
