import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 75px 0 22px;
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.color.blue[8]};
`;

const LogoWrapper = styled.div<{ $width: number }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $width }) => ($width === 180 ? 'space-between' : 'flex-start')};
  padding-right: 16px;

  width: ${({ $width }) => $width}px;
  overflow: hidden;
  transition: width 0.2s ease-in-out;
`;

const LogoImage = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}px;
  transition: width 0.2s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 75px;
  width: inherit;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const AddNewButton = styled.button`
  display: flex;
  padding: 5px 30px;
  background: ${({ theme }) => theme.color.gray[0]};
  border-radius: 2px;
`;

const OpenWrapper = styled.div<{ $isOpen: boolean }>`
  min-width: 24px;
  min-height: 24px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotateY(0)' : ' rotateY(180deg)')};
  cursor: pointer;
`;

export { Header, LogoWrapper, Content, Left, Right, AddNewButton, OpenWrapper, LogoImage };
