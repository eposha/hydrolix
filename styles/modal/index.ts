import styled from 'styled-components';

const Shadow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background: rgba(38, 46, 58, 0.5);
  z-index: 4;
`;

const Container = styled.div`
  position: relative;
  width: 540px;
  background-color: ${(p) => p.theme.color.gray[0]};
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 2px;
`;

const Icon = styled.svg`
  width: 22px;
  height: 22px;
  fill: none;
  stroke: ${(p) => p.theme.color.gray[4]};
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: found;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;

  &:hover {
    stroke: ${(p) => p.theme.color.gray[6]};
  }
`;

const Content = styled.div`
  overflow: auto;
  color: ${(p) => p.theme.color.gray[6]};
`;

const Footer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 30px;
`;

export { Container, Content, Footer, Shadow, Icon };
