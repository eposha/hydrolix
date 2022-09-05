import React, { FC, useCallback, useRef, useState } from 'react';

import { useClickOutside } from 'src/hooks/clickOutside';
import {
  DropMenuArrow,
  DropMenuContainer,
  DropMenuHeader,
  DropMenuList,
  DropMenuListItem,
} from 'styles/drop-menu';
import { InlineText } from 'styles/typography';

interface Props {
  content: DropDownItem[];
  name: string;
}

const DropMenu: FC<Props> = ({ content, name }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const dropDownToogler = useCallback(() => setIsActive(!isActive), [isActive]);

  const closeDropMenu = useCallback(() => {
    setIsActive(false);
  }, []);

  useClickOutside({ ref: menuRef, onClickOutside: closeDropMenu });

  const renderedDropMenuItem = (item: DropDownItem) => {
    return (
      <DropMenuListItem key={item.title} onClick={item.handler}>
        {item?.icon}
        {item.title}
      </DropMenuListItem>
    );
  };

  return (
    <DropMenuContainer onClick={dropDownToogler} ref={menuRef}>
      <DropMenuHeader>
        <InlineText size="md">{name}</InlineText>
        <DropMenuArrow viewBox="0 0 10 6" className={isActive ? 'menu-opened' : ''}>
          <path d="M1 5L5 1L9 5" />
        </DropMenuArrow>
      </DropMenuHeader>
      <DropMenuList className={isActive ? 'menu-opened' : ''}>
        {content.map((item) => renderedDropMenuItem(item))}
      </DropMenuList>
    </DropMenuContainer>
  );
};

export default DropMenu;
