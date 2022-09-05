import { Dispatch, FC, SetStateAction } from 'react';

import { StyledTab } from 'styles/tab';
import { IS_DEV } from 'utils/constants/common';

interface Props {
  label: string;
  id: string;
  dataTestId: string;
  className?: string;
  disabled?: boolean;
  isActive?: boolean;
  fullfilled?: boolean;
  onClick: Dispatch<SetStateAction<string>>;
}

const Tab: FC<Props> = ({
  label,
  id,
  dataTestId,
  className,
  disabled,
  isActive = false,
  fullfilled = false,
  onClick,
}) => {
  const handleOnClick = () => {
    if (!disabled) onClick(id);
  };

  return (
    <div className={className}>
      <StyledTab
        disabled={disabled}
        data-testid={IS_DEV && dataTestId}
        isActive={isActive}
        fullfilled={fullfilled}
        onClick={handleOnClick}
      >
        {label}
      </StyledTab>
    </div>
  );
};

export default Tab;
