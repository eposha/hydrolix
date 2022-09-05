import styled from 'styled-components';

const DropMenuContainer = styled.div`
  position: relative;
  width: max-content;
  cursor: pointer;
`;

const DropMenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  color: ${(p) => p.theme.color.gray[0]};
  transition: all 0.2s linear;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DropMenuArrow = styled.svg`
  width: 10px;
  height: 6px;
  fill: none;
  stroke: ${(p) => p.theme.color.gray[0]};
  stroke-width: 1.4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(180deg);
  transition: all 0.2s linear;

  &.menu-opened {
    transform: rotate(360deg);
  }
`;

const DropMenuList = styled.ul`
  position: absolute;
  top: 24px;
  right: 0;
  z-index: 999;
  box-sizing: border-box;
  width: fit-content;
  min-width: 182px;
  background-color: ${(p) => p.theme.color.gray[0]};
  border-radius: 2px;
  visibility: hidden;
  opacity: 0;
  box-shadow: 0px 0px 12px rgba(82, 82, 88, 0.16);

  &.menu-opened {
    visibility: visible;
    opacity: 1;
  }
`;

const DropMenuListItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px 20px;
  color: ${(p) => p.theme.color.gray[9]};

  svg {
    stroke: ${(p) => p.theme.color.gray[9]};
  }

  &:hover {
    background: ${(p) => p.theme.color.gray[1]};
  }
`;

export { DropMenuContainer, DropMenuHeader, DropMenuArrow, DropMenuList, DropMenuListItem };
