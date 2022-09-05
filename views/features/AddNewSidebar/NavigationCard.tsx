import Image from 'next/image';
import type { FC } from 'react';
import Link from 'next/link';

import { Text } from 'styles/typography';
import * as UI from 'styles/add-new-sidebar/NavigationCard';

export interface INavigationCard {
  type: string;
  title: string;
  subtitle?: string;
  href: string;
}

const NavigationCard: FC<INavigationCard> = ({ type, title, subtitle = ' ', href }) => {
  const iconSrc = `/icons/addNewSidebar/${type}.svg`;

  return (
    <Link href={href} passHref>
      <UI.Container>
        <Image src={iconSrc} width={18} height={18} alt={'icon'} />

        <UI.Title>
          <Text size="md">{title}</Text>
        </UI.Title>
        <UI.Content>
          <Text size="sm">{subtitle}</Text>
        </UI.Content>
      </UI.Container>
    </Link>
  );
};

export default NavigationCard;
