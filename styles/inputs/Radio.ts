import styled from 'styled-components';

interface IRadio {
  checked?: boolean;
  disabled?: boolean;
}

const RadioContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const RadioIcon = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

const StyledRadio = styled.div<IRadio>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 16px;
  height: 16px;
  background: ${(p) => (p.disabled ? p.theme.color.gray[1] : p.theme.color.gray[0])};
  border-radius: 20px;
  border: 1px solid
    ${(p) =>
      p.disabled
        ? p.theme.color.gray[4]
        : p.checked
        ? p.theme.color.blue[5]
        : p.theme.color.gray[3]};
  transition: all 150ms;
  margin-right: 10px;

  ${RadioIcon} {
    visibility: ${(p) => (p.checked ? 'visible' : 'hidden')};
  }
`;

const RadioLabel = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  user-select: none;
  color: ${(p) => (p.disabled ? p.theme.color.gray[5] : p.theme.color.gray[10])};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  ${RadioIcon} {
    background: ${(p) => (p.disabled ? p.theme.color.gray[5] : p.theme.color.blue[5])};
  }

  &:hover {
    ${StyledRadio} {
      border: 1px solid ${(p) => (p.disabled ? p.theme.color.gray[4] : p.theme.color.blue[5])};
    }

    &:disabled {
    ${StyledRadio} {
      cursor: not-allowed;
    }
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  z-index: -1;
`;

export { RadioContainer, RadioIcon, HiddenRadio, StyledRadio, RadioLabel };
