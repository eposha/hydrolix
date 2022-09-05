import styled, { keyframes } from 'styled-components';

const toastInRight = keyframes`
0% {
  opacity: 0.5;
	  transform: translateX(100%);
	  
	}
	100% {
    opacity: 1;
	  transform: translateX(0);
	}
`;

const toastInLeft = keyframes`
0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
`;

const Toasts = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &.top-right {
    top: 12px;
    right: 12px;
  }

  &.top-left {
    top: 12px;
    left: 12px;
  }

  &.bottom-right {
    bottom: 12px;
    right: 12px;
  }

  &.bottom-left {
    bottom: 12px;
    left: 12px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 350px;
  padding: 14px;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 22px;
  grid-column-gap: 10px;
  align-items: center;
  background: ${(p) => p.theme.color.gray[10]};
  box-shadow: 0px 0px 20px rgba(82, 82, 88, 0.14);
  border-radius: 2px;

  &.top-right {
    transition: transform 0.6s ease-in-out;
    animation: ${toastInRight} linear 0.7s;
  }

  &.top-left {
    transition: transform 0.6s ease-in;
    animation: ${toastInLeft} 0.7s;
  }

  &.bottom-right {
    transition: transform 0.6s ease-in-out;
    animation: ${toastInRight} 0.7s;
  }

  &.bottom-left {
    transition: transform 0.6s ease-in;
    animation: ${toastInLeft} 0.7s;
  }
`;

const IconContainer = styled.div`
  grid-column: 0 / 2;
  grid-row: 0 span 2;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${(p) => p.theme.color.gray[4]};
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: found;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  &:hover {
    stroke: ${(p) => p.theme.color.gray[6]};
  }
`;

const Title = styled.div`
  grid-column: 2 / 3;
  grid-row: 0 / 2;
  font-weight: 500;
  color: ${(p) => p.theme.color.gray[0]};
`;

const Content = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: 400;
  color: ${(p) => p.theme.color.gray[3]};
`;

export { Container, Icon, IconContainer, Title, Content, Toasts };
