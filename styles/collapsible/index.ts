import styled from 'styled-components';

import { Text } from 'styles/typography';

const Collapsible = styled.div<{ $isOpen: boolean }>`
  border-left: 1px solid ${({ theme }) => theme.color.gray[2]};
  border-right: 1px solid ${({ theme }) => theme.color.gray[2]};

  ${({ $isOpen, theme }) => !$isOpen && `border-bottom: 1px solid ${theme.color.gray[2]}`};
  :first-child {
    border-top: 1px solid ${({ theme }) => theme.color.gray[2]};
  }
  :last-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray[2]};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 12px;
  background: ${({ theme }) => theme.color.gray[1]};
  cursor: pointer;
`;

const Title = styled(Text)`
  margin-left: 14px;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  transition: height 0.2s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 39px;
  border-top: 1px solid ${({ theme }) => theme.color.gray[2]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[2]};
  :last-child {
    border-bottom: none;
  }
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const ContentText = styled(Text)`
  margin-left: 7px;
`;

export { Collapsible, ContentWrapper, Content, Header, Title, ContentText };
