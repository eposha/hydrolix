import styled from 'styled-components';

interface ICFContainer {
  gap?: number;
  width?: string;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: fit-content, auto;
  gap: 30px;
  margin-bottom: 40px;
  align-items: start;
`;

const CFContainer = styled.div<ICFContainer>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(p) => (p.gap ? p.gap + 'px' : '30px')};
  width: ${(p) => p.width ?? '390px'};
`;

const CFLContainer = styled(CFContainer)`
  align-items: flex-start;
`;

const TabContainer = styled(CFContainer)`
  flex-direction: row;
  justify-content: flex-start;
  gap: 32px;
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.color.gray[4]};
  margin-bottom: 30px;
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LoaderContainer = styled.div`
  svg {
    stroke: ${(p) => p.theme.color.gray[9]};
  }
`;

export { AuthContainer, GridContainer, CFContainer, CFLContainer, TabContainer, LoaderContainer };
