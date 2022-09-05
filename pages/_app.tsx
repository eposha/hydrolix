import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

import { MainLayout } from 'views/hoc/Layouts/MainLayout';
import fetcher from 'utils/axios/fetcher';
import GlobalStyle from 'views/components/GlobalStyle';
import { lightTheme } from 'theme';
import 'utils/axios/config';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <SWRConfig
      value={{
        fetcher,
        shouldRetryOnError: false,
      }}
    >
      <ThemeProvider theme={lightTheme}>
        {getLayout(
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>,
        )}
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
