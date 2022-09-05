import { Dispatch, FC, SetStateAction } from 'react';

import { DropDownContainer, DropDownLabel, StyledDropDown } from 'styles/inputs';
import { IS_DEV } from 'utils/constants/common';

interface Props {
  options: Option[];
  disabled?: boolean;
  multi?: boolean;
  searchable?: boolean;
  placeholder: string;
  className?: string;
  value: Option | null;
  error?: boolean;
  dataTestId: string;
  onChange: Dispatch<SetStateAction<Option | null>>;
}

const DropDown: FC<Props> = ({
  options,
  disabled = false,
  multi = false,
  searchable = false,
  placeholder,
  className,
  value,
  error = false,
  dataTestId,
  onChange,
}) => {
  const handleOnChange = (option: unknown) => {
    onChange(option as Option);
  };

  return (
    <DropDownContainer>
      <DropDownLabel show={!!value} error={error}>
        {placeholder}
      </DropDownLabel>
      <StyledDropDown
        data-testid={IS_DEV && dataTestId}
        options={options}
        classNamePrefix="dropdown"
        onChange={handleOnChange}
        isDisabled={disabled}
        isMulti={multi}
        isSearchable={searchable}
        error={error}
        placeholder={placeholder}
        className={className}
        value={value}
      />
    </DropDownContainer>
  );
};

export default DropDown;
