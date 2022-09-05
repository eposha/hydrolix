import Image from 'next/image';
import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

import { useTranslation } from 'src/hooks/translation';
import { Text } from 'styles/typography';
import * as UI from 'styles/header';
import { useOpenSidebar } from 'store/common';

import useDropDownMenu from './hooks/useHeaderDropMenu';

const AddNewSidebar = dynamic(() => import('views/features/AddNewSidebar/AddNewSidebar'));

const Header = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslation();

  const { RenderDropMenu } = useDropDownMenu();

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  const { data: isOpen, mutate } = useOpenSidebar();

  const handleOpening = () => mutate(!isOpen, false);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <UI.Header>
      <UI.LogoWrapper $width={isOpen ? 180 : 62}>
        <UI.LogoImage $width={isOpen ? 180 : 0}>
          <Image src={'/icons/logo/main-logo.svg'} width={75} height={21} alt={'Logo'} />
        </UI.LogoImage>
        <UI.OpenWrapper $isOpen={!!isOpen}>
          <Image
            src={'/icons/sidebar/open-sidebar.svg'}
            width={24}
            height={24}
            alt={'Logo'}
            onClick={handleOpening}
          />
        </UI.OpenWrapper>
      </UI.LogoWrapper>
      <UI.Content>
        <UI.Left></UI.Left>
        <UI.Right>
          <RenderDropMenu />
          <UI.AddNewButton onClick={toggleOpen}>
            <Text lineHeight="md"> + {t.addNewSidebar.addNewButtonText}</Text>
          </UI.AddNewButton>
        </UI.Right>
      </UI.Content>

      {open && <AddNewSidebar onClose={handleClose} />}
    </UI.Header>
  );
};

export default Header;
