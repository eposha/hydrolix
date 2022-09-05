import { useCallback, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { useNotificationStore } from 'store/notifications';

import Toast from './Toast';

const useToast = (delay = 2000, position?: ToastPosition) => {
  const { data: toasts, mutate: setToasts } = useNotificationStore();

  const addToast = async (toast: IToast) => {
    await setToasts([...(toasts ?? []), { ...toast, id: nanoid() }], false);
  };

  const showError = async (error: ResponceError) => {
    await addToast({ type: 'error', text: error.error?._error?.message || 'Something went wrong' });
  };

  const showErrorDirectly = async (text: string, title?: string) => {
    await addToast({ type: 'error', title, text });
  };

  const showSuccessNotification = async (text: string, title?: string) => {
    await addToast({ type: 'success', title, text });
  };

  const removeToast = useCallback(
    (id?: string) => {
      setToasts(
        toasts?.filter((t) => t.id !== id),
        false,
      );
    },
    [toasts, setToasts],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts?.length) {
        removeToast(toasts[0].id);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [toasts, removeToast, delay]);

  const renderToasts = useCallback(() => {
    return <Toast toastList={toasts || []} removeToast={removeToast} position={position} />;
  }, [toasts, removeToast, position]);

  return { addToast, showError, showErrorDirectly, showSuccessNotification, renderToasts };
};

export default useToast;
