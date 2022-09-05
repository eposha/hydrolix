interface ICurrentPageOptions {
  href: string;
}

interface Options {
  pathname: string;
}

const useCurrentPage = ({ pathname }: Options) => {
  const getIsActivePage = ({ href }: ICurrentPageOptions) => {
    const isActivePage =
      pathname.startsWith(href) ||
      pathname.startsWith('/dashboard') ||
      (pathname === '/' && href === '/dashboard');

    const isStartPage = href === '/dashboard';

    return { isActivePage, isStartPage };
  };

  return { getIsActivePage };
};

export default useCurrentPage;
