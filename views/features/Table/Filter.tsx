import { InputHTMLAttributes, useEffect, useState } from 'react';
import { Column, Table } from '@tanstack/react-table';

import * as UI from 'styles/table/filter';

const Filter = ({
  column,
  onClose,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
  onClose: () => void;
}) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <DebouncedInput
      type="text"
      value={(columnFilterValue ?? '') as string}
      onChange={(value) => column.setFilterValue(value)}
      onClose={onClose}
    />
  );
};

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 350,
  onClose,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  onClose: () => void;
  debounce?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <UI.SearchWrapper>
      <UI.SearchInputIcon width={14} height={14} />
      <UI.SearchInput
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />
      <UI.CloseIcon
        width={14}
        height={14}
        onClick={() => {
          onClose();
          onChange('');
        }}
      />
    </UI.SearchWrapper>
  );
};

export default Filter;
