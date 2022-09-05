/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const usePreviousRoute = (options?: { isFollow?: boolean }) => {
  const { asPath } = useRouter();

  const { isFollow } = options || {};

  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = asPath;
  }, [isFollow && asPath]);

  return ref.current;
};

export default usePreviousRoute;
