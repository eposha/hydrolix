import styled from 'styled-components';

interface Props {
  fullfilled?: boolean;
  isActive?: boolean;
}

const StyledTab = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(p) => (p.fullfilled ? '122px' : 'auto')};
  height: ${(p) => (p.fullfilled ? '42px' : '58px')};
  border: none;
  color: ${(p) =>
    p.fullfilled
      ? p.isActive
        ? p.theme.color.gray[0]
        : p.theme.color.gray[9]
      : p.isActive
      ? p.theme.color.blue[5]
      : p.theme.color.gray[10]};
  background: ${(p) =>
    p.fullfilled ? (p.isActive ? p.theme.color.gray[5] : p.theme.color.gray[2]) : 'none'};
  font-size: ${(p) => (p.fullfilled ? p.theme.typo.p.size.md : p.theme.typo.p.size.lg)};
  line-height: ${(p) =>
    p.fullfilled ? p.theme.typo.p.lineHeight.md : p.theme.typo.p.lineHeight.lg};
  font-weight: 400;
  padding-bottom: ${(p) => (p.fullfilled || p.isActive ? '0' : '2px')};
  border-bottom: ${(p) =>
    p.fullfilled ? 'none' : p.isActive ? '2px solid ' + p.theme.color.blue[5] : 'none'};

  &:hover {
    background: ${(p) => (p.fullfilled ? p.theme.color.gray[4] : 'none')};
    color: ${(p) => (p.fullfilled ? p.theme.color.gray[0] : p.theme.color.gray[9])};
    cursor: pointer;
  }

  &:disabled {
    background: ${(p) => (p.fullfilled ? p.theme.color.gray[4] : 'none')};
    color: ${(p) => (p.fullfilled ? p.theme.color.gray[0] : p.theme.color.gray[5])};
    border: none;
    padding-bottom: 2px;
    cursor: not-allowed;
  }
`;

export { StyledTab };
