import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { useCurrentPage } from 'src/hooks/router';
import { useTranslation } from 'src/hooks/translation';
import { useOpenSidebar } from 'store/common';
import * as UI from 'styles/sidebar';

interface NavigationProps {
  name: string;
  href: string;
  iconSrc: string;
}

const getNavList = (t: TranslationType): NavigationProps[] => [
  {
    name: t.sidebar.dashboard,
    href: '/dashboard',
    iconSrc: '/icons/nav/dashboard.svg',
  },
  {
    name: t.sidebar.data,
    href: '/data',
    iconSrc: '/icons/nav/data.svg',
  },
  {
    name: t.sidebar.jobs,
    href: '/jobs',
    iconSrc: '/icons/nav/jobs.svg',
  },
  {
    name: t.sidebar.scale,
    href: '/scale',
    iconSrc: '/icons/nav/scale.svg',
  },
  {
    name: t.sidebar.query,
    href: '/query',
    iconSrc: '/icons/nav/query.svg',
  },
  {
    name: t.sidebar.security,
    href: '/security',
    iconSrc: '/icons/nav/security.svg',
  },
  {
    name: t.sidebar.support,
    href: '/support',
    iconSrc: '/icons/nav/support.svg',
  },
];

const Sidebar = () => {
  const { pathname } = useRouter();
  const t = useTranslation();

  const navList = useMemo(() => getNavList(t), [t]);

  const { getIsActivePage } = useCurrentPage({ pathname });

  const { data: isOpen } = useOpenSidebar();

  return (
    <UI.Sidebar $width={isOpen ? 180 : 62}>
      <nav>
        <UI.NavList>
          {navList.map(({ name, href, iconSrc }) => {
            const { isActivePage, isStartPage } = getIsActivePage({ href });

            const path = isStartPage ? '/' : href;

            return (
              <Link key={href} href={path} passHref>
                <UI.NavItem $isActive={isActivePage}>
                  <UI.IconWrapper>
                    <UI.Icon
                      src={iconSrc}
                      width={18}
                      height={18}
                      alt={'icon'}
                      $isActive={isActivePage}
                    />
                  </UI.IconWrapper>
                  <UI.Name $isOpen={!!isOpen}>{name}</UI.Name>
                </UI.NavItem>
              </Link>
            );
          })}
        </UI.NavList>
      </nav>
    </UI.Sidebar>
  );
};

export default Sidebar;
