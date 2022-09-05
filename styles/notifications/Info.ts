import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -10px;
  margin-bottom: -10px;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 20px;
  font-size: ${(p) => p.theme.typo.p.size.md};
  line-height: ${(p) => p.theme.typo.p.lineHeight.md};
  color: ${(p) => p.theme.color.danger[10]};

  &.error {
    background-color: ${(p) => p.theme.color.danger[0]};
  }
`;

export { InfoContainer, InfoWrapper };
