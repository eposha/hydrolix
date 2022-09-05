import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
0% {
  transform: translateX(410px);
  opacity: 0;
}
100% {
  transform: translateX(0);
  opacity: 1;
}
`;

const slideInBackground = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const AdditionalSidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 25px;
  width: 410px;
  height: 100%;
  min-height 100vh;
  background-color: ${({ theme }) => theme.color.gray[0]};
  z-index: 99999999;
  overflow: auto;

  animation: ${slideIn} 0.2s 0s 1 normal none;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  min-height 100vh;
  background-color: ${({ theme }) => theme.color.gray[11]};
  z-index: 9999999;

  animation: ${slideInBackground} 0.2s 0s 1 normal none;

`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  right: -15px;

  cursor: pointer;
`;

export { AdditionalSidebar, Background, Header, CloseIconWrapper };
