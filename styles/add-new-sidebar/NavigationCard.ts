import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.button`
  position: relative;
  width: 100%;
  padding: 14px 16px;
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-template-rows: 22px 22px;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: start;
  border: 1px solid ${({ theme }) => theme.color.gray[2]};
  background-color: ${({ theme }) => theme.color.gray[0]};
  border-radius: 2px;

  &:hover {
    ${({ theme, disabled }) => !disabled && `border: 1px solid ${theme.color.gray[5]}`};
  }

  ${({ theme, disabled }) => disabled && `background-color: ${theme.color.gray[1]}`};
`;

const Title = styled.div`
  grid-column: 2 / 3;
  grid-row: 0 / 2;
  font-weight: 500;
  text-align: left;
  color: ${(p) => p.theme.color.gray[10]};
`;

const Content = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: 400;
  text-align: left;
  color: ${(p) => p.theme.color.gray[7]};
`;

export { Container, Title, Content, Card };
