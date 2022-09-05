import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import OpenIcon from 'public/icons/collapse/open.svg';
import CloseIcon from 'public/icons/collapse/close.svg';
import TableIcon from 'public/icons/collapse/table.svg';
import DictionariesIcon from 'public/icons/collapse/dictionaries.svg';
import FunctionsIcon from 'public/icons/collapse/functions.svg';
import * as UI from 'styles/collapsible';

const TypeIcon = {
  table: <TableIcon width={14} height={14} />,
  dictionaries: <DictionariesIcon width={14} height={14} />,
  functions: <FunctionsIcon width={14} height={14} />,
};

interface IList {
  id: string;
  title: string;
  href: string;
}

interface IProps {
  open?: boolean;
  header: string | ReactNode;
  list: IList[];
  type: 'table' | 'dictionaries' | 'functions';
}

const Collapsible: FC<IProps> = ({ open, header, list, type }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);
  const ref = useRef<HTMLDivElement>(null);

  const handleFilterOpening = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;

    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    isOpen ? setHeight(ref.current?.getBoundingClientRect().height) : setHeight(0);
  }, [isOpen]);

  return (
    <UI.Collapsible $isOpen={!!open}>
      <UI.Header onClick={handleFilterOpening}>
        {isOpen ? <OpenIcon width={16} height={16} /> : <CloseIcon width={16} height={16} />}
        <UI.Title $color={10}>{header}</UI.Title>
      </UI.Header>

      <UI.ContentWrapper style={{ height }}>
        <div ref={ref}>
          <ul>
            {list.map(({ id, title, href }) => (
              <Link key={id} href={href || '#'}>
                <a>
                  <UI.Content>
                    {TypeIcon[type]}
                    <UI.ContentText $color={10}>{title}</UI.ContentText>
                  </UI.Content>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </UI.ContentWrapper>
    </UI.Collapsible>
  );
};

export default Collapsible;
