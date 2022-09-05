import type { RefObject } from 'react';
import { useEffect } from 'react';

interface IUseClickOutside {
  onClickOutside: () => void;
  ref: RefObject<HTMLElement>;
  closeOnEsc?: boolean;
}

const useClickOutside = ({ onClickOutside, ref, closeOnEsc }: IUseClickOutside) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | KeyboardEvent) => {
      if (ref?.current && !ref?.current.contains(event.target as Node)) {
        onClickOutside && onClickOutside();
      }
    };

    const handleClickEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClickOutside(event);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    closeOnEsc && document.addEventListener('keydown', handleClickEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      closeOnEsc && document.removeEventListener('keydown', handleClickEscape);
    };
  }, [closeOnEsc, onClickOutside, ref]);
};

export default useClickOutside;
