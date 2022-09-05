import Image from 'next/image';
import styled from 'styled-components';

const Sidebar = styled.aside<{ $width: number }>`
  padding: 28px 22px;
  width: ${({ $width }) => $width}px;
  min-height: 100%;
  background-color: ${({ theme }) => theme.color.gray[1]};

  overflow: hidden;
  transition: width 0.2s ease-in-out;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  min-width: 18px;
  min-height: 18px;
`;

const Icon = styled(Image)<{ $isActive?: boolean }>`
  filter: ${({ $isActive }) =>
    $isActive ? 'brightness(1) opacity(1)' : 'brightness(0) opacity(0.5)'};
`;

const Name = styled.div<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

const NavItem = styled.a<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.typo.p.size.md};
  font-weight: 400;
  line-height: ${({ theme }) => theme.typo.p.lineHeight.md};
  color: ${({ $isActive, theme }) => ($isActive ? theme.color.blue[5] : theme.color.gray[8])};
  cursor: pointer;

  &: hover {
    color: ${({ theme }) => theme.color.blue[5]};
  }

  &: hover ${Icon} {
    filter: brightness(1) opacity(1);
  }
`;

export { Sidebar, NavList, NavItem, IconWrapper, Icon, Name };
