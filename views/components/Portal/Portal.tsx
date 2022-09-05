import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface IPortal {
  children: React.ReactNode;
}

const Portal: React.FC<IPortal> = ({ children }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, []);

  return mount ? createPortal(children, document.body) : null;
};

export default Portal;
