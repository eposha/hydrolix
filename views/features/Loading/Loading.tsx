import { AuthContainer, CFContainer, LoaderContainer } from 'styles/containers';
import Loader from 'views/components/Loader';
import Logo from 'views/components/Logo';

const Loading = () => (
  <AuthContainer>
    <CFContainer>
      <Logo />
      <LoaderContainer>
        <Loader size={36} />
      </LoaderContainer>
    </CFContainer>
  </AuthContainer>
);

export default Loading;
