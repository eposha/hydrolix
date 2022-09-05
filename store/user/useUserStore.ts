import useSWR from 'swr';

import fetcher from 'utils/axios/fetcher';
import { getUserCookies } from 'utils/cookies';

const useUserStore = () => {
  const { userId } = getUserCookies();

  return useSWR<User, ResponceError>(userId ? `/users/${userId}` : null, fetcher);
};

export default useUserStore;
