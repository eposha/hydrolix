import { PropsWithChildren, useCallback, useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import dynamic from 'next/dynamic';

import { Text } from 'styles/typography';
import * as UI from 'styles/table';

const Filter = dynamic(() => import('./Filter'));

const fuzzyFilter: FilterFn<unknown> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({
    itemRank,
  });

  return itemRank.passed;
};

interface Props<T> {
  columns: ColumnDef<T, any>[];
  data: T[];
}

const Table = <T,>({ columns, data }: PropsWithChildren<Props<T>>) => {
  const [showedFilters, setShowedFilters] = useState<{ [x: string]: boolean }>({});

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const handleShowFilter = useCallback(
    (id: string) => () => setShowedFilters((prev) => ({ ...prev, [id]: !prev[id] })),
    [],
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <UI.Table>
      <UI.TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <UI.Th key={header.id}>
                <UI.ThData>
                  {header.isPlaceholder || showedFilters[header.column.id] ? null : (
                    <UI.TextWrapper>
                      <Text size="md" lineHeight="xxl" $color={12}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </Text>
                      {header.column.getCanFilter() && (
                        <UI.SearchIcon
                          width={14}
                          height={14}
                          onClick={handleShowFilter(header.column.id)}
                        />
                      )}
                    </UI.TextWrapper>
                  )}
                  {header.column.getCanFilter() ? (
                    <>
                      {showedFilters[header.column.id] && (
                        <Filter
                          column={header.column}
                          table={table}
                          onClose={handleShowFilter(header.column.id)}
                        />
                      )}
                    </>
                  ) : null}
                </UI.ThData>
              </UI.Th>
            ))}
          </tr>
        ))}
      </UI.TableHead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <UI.TBodyTr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <UI.Td key={cell.id}>
                <Text $color={12} lineHeight="xxl">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Text>
              </UI.Td>
            ))}
          </UI.TBodyTr>
        ))}
      </tbody>
    </UI.Table>
  );
};

export default Table;
