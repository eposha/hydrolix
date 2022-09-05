import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  border-radius: 2px;
  min-width: 176px;
  height: 44px;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 20px;
  transition: all 0.25s ease-out;

  &.full-width {
    width: 100%;
  }

  &.primary {
    background: ${(p) => p.theme.btn.primary.bg.default};
    color: ${(p) => p.theme.btn.primary.color.default};

    &:hover {
      background: ${(p) => p.theme.btn.primary.bg.hovered};
      color: ${(p) => p.theme.btn.primary.color.hovered};
    }

    &:disabled {
      background: ${(p) => p.theme.btn.primary.bg.disabled};
      color: ${(p) => p.theme.btn.primary.color.disabled};

      svg {
        stroke: ${(p) => p.theme.btn.primary.color.disabled};
      }
    }
  }

  &.secondary {
    background: ${(p) => p.theme.btn.secondary.bg.default};
    color: ${(p) => p.theme.btn.secondary.color.default};

    &:hover {
      background: ${(p) => p.theme.btn.secondary.bg.hovered};
      color: ${(p) => p.theme.btn.secondary.color.hovered};
    }

    &:disabled {
      background: ${(p) => p.theme.btn.secondary.bg.disabled};
      color: ${(p) => p.theme.btn.secondary.color.disabled};

      svg {
        stroke: ${(p) => p.theme.btn.secondary.color.disabled};
      }
    }
  }

  &.outlined {
    height: 30px;
    min-width: 100px;
    background: none;
    font-size: 14px;
    line-height: 22px;
    color: ${(p) => p.theme.btn.outlined.default};
    padding: 5px 15px;
    border: ${(p) => '1px solid ' + p.theme.btn.outlined.default};

    &:hover {
      color: ${(p) => p.theme.btn.outlined.hovered};
      border: ${(p) => '1px solid ' + p.theme.btn.outlined.hovered};
    }

    &:disabled {
      color: ${(p) => p.theme.btn.outlined.disabled};
      border: ${(p) => '1px solid ' + p.theme.btn.outlined.disabled};
    }
  }
`;

const StyledTextButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  background: none;

  &.primary {
    color: ${(p) => p.theme.textBtn.primary.default};

    svg {
      stroke: ${(p) => p.theme.textBtn.primary.default};
    }

    &:hover {
      color: ${(p) => p.theme.textBtn.primary.hovered};

      svg {
        stroke: ${(p) => p.theme.textBtn.primary.hovered};
      }
    }

    &:disabled {
      color: ${(p) => p.theme.textBtn.primary.disabled};

      svg {
        stroke: ${(p) => p.theme.textBtn.primary.disabled};
      }
    }
  }

  &.secondary {
    color: ${(p) => p.theme.textBtn.secondary.default};

    svg {
      stroke: ${(p) => p.theme.textBtn.secondary.default};
    }

    &:hover {
      color: ${(p) => p.theme.textBtn.secondary.hovered};

      svg {
        stroke: ${(p) => p.theme.textBtn.secondary.hovered};
      }
    }

    &:disabled {
      color: ${(p) => p.theme.textBtn.secondary.disabled};

      svg {
        stroke: ${(p) => p.theme.textBtn.secondary.disabled};
      }
    }
  }
`;

export { StyledButton, StyledTextButton };
