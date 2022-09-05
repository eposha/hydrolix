import styled from 'styled-components';

import CloseSvg from 'public/icons/table/close.svg';
import SearchSvg from 'public/icons/table/search.svg';

const SearchWrapper = styled.div`
  position: relative;
  margin: 4px 0;
`;

const SearchInput = styled.input`
  padding: 0 26px;
  width: 100%;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.color.gray[3]};
  border-radius: 2px;
`;

const SearchInputIcon = styled(SearchSvg)`
  position: absolute;
  top: 5px;
  left: 8px;
`;

const CloseIcon = styled(CloseSvg)`
  position: absolute;
  top: 5px;
  right: 8px;
  cursor: pointer;
`;

export { SearchWrapper, SearchInput, SearchInputIcon, CloseIcon };
