import useSWR from 'swr';

const fetcher = () => null;

const useSWRStore = <T, K>(key: string, options?: K) =>
  useSWR<T | null>(key, fetcher, {
    dedupingInterval: 2000000000000,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
    ...(options ?? {}),
  });

export default useSWRStore;
