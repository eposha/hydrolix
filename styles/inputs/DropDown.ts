import Select from 'react-select';
import styled from 'styled-components';

interface IDropDown {
  disabled?: boolean;
  error?: boolean;
}

const DropDownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 44px;
  }
`;

const DropDownLabel = styled.label<{ show: boolean; error: boolean }>`
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
  z-index: 99;
`;

const StyledDropDown = styled(Select)<IDropDown>`
  width: 100%;
  border: none;

  .dropdown__control {
    width: 100%;
    height: 44px;
    border: 1px solid ${(p) => (p.error ? p.theme.color.danger[2] : p.theme.color.gray[3])};
    box-shadow: none;
    border-radius: 2px;
    background: ${(p) => p.theme.color.gray[0]};
    padding-left: 6px;

    &:hover {
      border: 1px solid ${(p) => (p.error ? p.theme.color.danger[2] : 'none')};
    }

    &--is-disabled {
      border: 1px solid ${(p) => p.theme.color.gray[2]};
      border-radius: 2px;
      background: ${(p) => p.theme.color.blue[0]};
      color: ${(p) => p.theme.color.gray[6]};
    }

    &--is-focused {
      border: 1px solid ${(p) => (p.error ? p.theme.color.danger[2] : p.theme.color.blue[5])};
      height: 42;
      box-shadow: 0px 0px 5px rgba(72, 95, 155, 0.25);

      .dropdown__indicator {
        color: ${(p) => p.theme.color.blue[5]};
      }
    }

    &--menu-is-open {
      .dropdown__indicator {
        transform: rotate(180deg);
      }
    }
  }

  .dropdown__placeholder {
    font-size: ${(p) => p.theme.typo.p.size.md};
    line-height: ${(p) => p.theme.typo.p.lineHeight.md};
    font-weight: 400;
    color: ${(p) => p.theme.color.gray[6]};
  }

  .dropdown__indicator-separator {
    background: none;
  }

  .dropdown__indicator {
    color: ${(p) => p.theme.color.gray[4]};
    transition: all ease-in 0.2s;

    &:hover {
      color: ${(p) => p.theme.color.gray[6]};
    }
  }

  .dropdown__menu {
    font-size: ${(p) => p.theme.typo.p.size.md};
    line-height: ${(p) => p.theme.typo.p.lineHeight.md};
    font-weight: 400;
    color: ${(p) => p.theme.color.gray[9]};
    margin-top: 1px;
    background: ${(p) => p.theme.color.gray[0]};
    box-shadow: 0px 0px 12px rgba(82, 82, 88, 0.16);
    border: none;
    border-radius: 0;
    z-index: 999;
  }

  .dropdown__option {
    color: ${(p) => p.theme.color.gray[9]};
    padding: 3px 16px;
    background: none;
    cursor: pointer;

    &:hover {
      background: ${(p) => p.theme.color.blue[1]};
    }
  }
`;

const DropDownOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export { DropDownContainer, DropDownLabel, StyledDropDown, DropDownOptionContainer };
