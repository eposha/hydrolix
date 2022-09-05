import { FC, useMemo } from 'react';

import { useTranslation } from 'src/hooks/translation';

import { AdditionalSidebar } from '../AdditionalSidebar';
import NavigationCard, { INavigationCard } from './NavigationCard';

interface IAddNewSidebar {
  onClose: () => void;
}

const navAdditionalSidebarList = (t: TranslationType): INavigationCard[] => [
  {
    type: 'alter',
    title: t.addNewSidebar.alter,
    subtitle: 'Modify append-only data',
    href: '/jobs/alter/create',
  },
  {
    type: 'batch',
    title: t.addNewSidebar.batch,
    href: '/jobs/batch/create',
  },
  {
    type: 'function',
    title: t.addNewSidebar.function,
    href: '/data/function/create',
  },
  {
    type: 'dictionary',
    title: t.addNewSidebar.dictionary,
    href: '/data/dictionary/create',
  },
  {
    type: 'ingest',
    title: t.addNewSidebar.ingest,
    href: '/data/ingest/source/create',
  },
  {
    type: 'transform',
    title: t.addNewSidebar.transform,
    href: '/data/ingest/transform/create',
  },
  {
    type: 'pool',
    title: t.addNewSidebar.pool,
    href: '/scale/pool/create',
  },
  {
    type: 'role',
    title: t.addNewSidebar.role,
    href: '/security/role/create',
  },
  {
    type: 'table',
    title: t.addNewSidebar.table,
    href: '/data/table/create',
  },
  {
    type: 'user',
    title: t.addNewSidebar.user,
    href: '/security/user/create',
  },
];

const AddNewSidebar: FC<IAddNewSidebar> = ({ onClose }) => {
  const t = useTranslation();

  const navList = useMemo(() => navAdditionalSidebarList(t), [t]);

  return (
    <AdditionalSidebar onClose={onClose} title={t.addNewSidebar.title}>
      {navList.map(({ type, title, subtitle, href }) => (
        <NavigationCard key={href} type={type} title={title} subtitle={subtitle} href={href} />
      ))}
    </AdditionalSidebar>
  );
};

export default AddNewSidebar;
