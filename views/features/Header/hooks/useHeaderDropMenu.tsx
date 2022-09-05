import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

import DropMenu from 'views/components/DropMenu';
import SettingsIcon from 'public/icons/other/settings.svg';
import PlusIcon from 'public/icons/other/plusCircle.svg';
import LogOutIcon from 'public/icons/other/logOut.svg';
import { useTranslation } from 'src/hooks/translation';
import { LogOut } from 'utils/auth/logOut';
import { ROUTES } from 'utils/constants/routes';
import { useUserStore } from 'store/user';

const useDropDownMenu = () => {
  const router = useRouter();
  const t = useTranslation();
  const { data: user } = useUserStore();

  const handleLogOut = useCallback(() => {
    LogOut(router);
  }, [router]);

  const handleNavigateToSettings = useCallback(() => {
    router.push(ROUTES.settings);
  }, [router]);

  const handleNavigateToTokenCreation = useCallback(() => {
    router.push(ROUTES.createToken);
  }, [router]);

  const dropMenuContent = useMemo(
    () => [
      {
        title: t.headerDropMenu.settings,
        handler: handleNavigateToSettings,
        icon: <SettingsIcon />,
      },
      { title: t.headerDropMenu.token, handler: handleNavigateToTokenCreation, icon: <PlusIcon /> },
      { title: t.headerDropMenu.logOut, handler: handleLogOut, icon: <LogOutIcon /> },
    ],
    [
      handleLogOut,
      handleNavigateToSettings,
      handleNavigateToTokenCreation,
      t.headerDropMenu.logOut,
      t.headerDropMenu.settings,
      t.headerDropMenu.token,
    ],
  );

  const RenderDropMenu = useCallback(() => {
    return <DropMenu name={user?.email as string} content={dropMenuContent} />;
  }, [user, dropMenuContent]);

  return { RenderDropMenu };
};

export default useDropDownMenu;
