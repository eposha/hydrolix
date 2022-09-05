import useSWRStore from '../useSWRStore';

const useNotificationStore = () =>
  useSWRStore<IToast[], unknown>('notification-store', { fallbackData: [] });

export default useNotificationStore;
