import { FC, ReactNode } from 'react';

import * as UI from 'styles/main-container';

interface IMainContainer {
  children: ReactNode;
}

const MainContainer: FC<IMainContainer> = ({ children }) => {
  return <UI.MainContainer>{children}</UI.MainContainer>;
};

export default MainContainer;
