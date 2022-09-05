import styled from 'styled-components';

import SearchSvg from 'public/icons/table/search.svg';

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-left: 1px solid ${({ theme }) => theme.color.gray[2]};
  border-right: 1px solid ${({ theme }) => theme.color.gray[2]};
`;

const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.color.gray[1]};
  border: 1px solid ${({ theme }) => theme.color.gray[2]};
`;

const Th = styled.th`
  padding: 2px 25px;
  text-align: start;
  flex: 1;
`;

const ThData = styled.div`
  display: flex;
`;

const TBodyTr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[2]};
`;

const Td = styled.td`
  padding: 4px 25px;
`;

const SearchIcon = styled(SearchSvg)`
  margin-left: 5px;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export { Table, TableHead, Th, ThData, TBodyTr, Td, SearchIcon, TextWrapper };
