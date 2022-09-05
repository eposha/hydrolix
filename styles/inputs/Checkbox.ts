import styled from 'styled-components';

interface ICheckbox {
  checked?: boolean;
  disabled?: boolean;
}

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Icon = styled.svg`
  width: 10px;
  height: 8px;
  fill: ${(p) => p.theme.color.gray[0]};
  stroke: none;
  stroke-width: 1px;
  position: absolute;
  top: 3px;
  left: 2px;
`;

const StyledCheckbox = styled.div<ICheckbox>`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  background: ${(p) =>
    p.disabled ? p.theme.color.gray[1] : p.checked ? p.theme.color.blue[5] : p.theme.color.gray[0]};
  border-radius: 2px;
  border: 1px solid
    ${(p) =>
      p.disabled
        ? p.theme.color.gray[4]
        : p.checked
        ? p.theme.color.blue[5]
        : p.theme.color.gray[3]};
  transition: all 150ms;
  margin-right: 10px;

  ${Icon} {
    visibility: ${(p) => (p.checked ? 'visible' : 'hidden')};
  }
`;

const Label = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  user-select: none;
  color: ${(p) => (p.disabled ? p.theme.color.gray[5] : p.theme.color.gray[10])};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  ${Icon} {
    fill: ${(p) => (p.disabled ? p.theme.color.gray[5] : p.theme.color.gray[0])};
  }

  &:hover {
    ${StyledCheckbox} {
      border: 1px solid ${(p) => (p.disabled ? p.theme.color.gray[4] : p.theme.color.blue[5])};
    }

    &:disabled {
    ${StyledCheckbox} {
      cursor: not-allowed;
    }
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

export { CheckboxContainer, Icon, HiddenCheckbox, StyledCheckbox, Label };
