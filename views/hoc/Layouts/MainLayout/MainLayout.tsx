import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getUserCookies } from 'utils/cookies';
import { Header } from 'views/features/Header';
import { Sidebar } from 'views/features/Sidebar';
import { MainContainer } from 'views/components/Container/MainContainer';
import SKIP_PROTECTED_ROUTES from 'utils/constants/skipProtectedRoutes';
import * as UI from 'styles/main-layout';
import { useToast } from 'views/components/Toast';
import Loading from 'views/features/Loading';
import { useUserStore } from 'store/user';

export interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  const router = useRouter();

  const { renderToasts } = useToast(2000);

  const { userId, isExpired } = getUserCookies();

  const { data, error } = useUserStore();

  useEffect(() => {
    if (
      (isExpired && !SKIP_PROTECTED_ROUTES.includes(router.pathname)) ||
      (error && error?.code === 401)
    ) {
      router.push(`/login?prevUrl=${router.asPath}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpired, router]);

  if ((data === undefined && error === undefined) || !userId) return <Loading />;

  return (
    <UI.MainLayout>
      <Header />

      <UI.Container>
        <Sidebar />
        <MainContainer>{children}</MainContainer>
      </UI.Container>
      {renderToasts()}
    </UI.MainLayout>
  );
};

export default MainLayout;
