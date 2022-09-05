import styled from 'styled-components';

import { Text } from 'styles/typography';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 44px;
  }
`;

const InputLabel = styled.label<{ show: boolean; error: boolean }>`
  position: absolute;
  top: ${(p) => (p.show ? '-5px' : '8px')};
  left: 16px;
  padding: 0 6px;
  color: ${(p) => (p.error ? p.theme.color.danger[2] : p.theme.color.gray[8])};
  background: ${(p) => (p.show ? p.theme.color.gray[0] : 'none')};
  opacity: ${(p) => (p.show ? '1' : '0')};
  transition: all linear 0.2s;
  font-size: 11px;
  line-height: 100%;
`;

const StyledInput = styled.input<{ error: boolean }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${(p) => (p.error ? p.theme.color.danger[2] : p.theme.color.gray[3])};
  border-radius: 2px;
  background: none;
  font-size: ${(p) => p.theme.typo.p.size.md};
  line-height: ${(p) => p.theme.typo.p.lineHeight.md};
  color: ${(p) => p.theme.color.gray[10]};
  padding: 0 16px;

  &::placeholder {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border: 1px solid ${(p) => (p.error ? p.theme.color.danger[2] : p.theme.color.blue[5])};
    box-shadow: 0px 0px 5px rgba(72, 95, 155, 0.25);
  }

  &:disabled {
    background: ${(p) => p.theme.color.blue[0]};
    color: ${(p) => p.theme.color.gray[6]};
    border: 1px solid ${(p) => p.theme.color.gray[2]};
    cursor: not-allowed;
  }
`;

const InputIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  position: absolute;
  top: 0;
  right: 15px;
  height: 100%;
`;

const InputRightText = styled(Text).attrs({
  size: 'md',
})`
  line-height: 100%;
  color: ${(p) => p.theme.color.gray[6]};
`;

export { InputContainer, InputLabel, StyledInput, InputIconWrapper, InputRightText };
