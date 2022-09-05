import useSWRStore from '../useSWRStore';

const useOpenSidebar = () =>
  useSWRStore<boolean, unknown>('open-sidebar-store', { fallbackData: true });

export default useOpenSidebar;
