import styled from 'styled-components';

const NavLink = styled.a`
  color: ${(p) => p.theme.textBtn.primary.default};

  &:hover {
    color: ${(p) => p.theme.textBtn.primary.hovered};
  }

  &:visited {
    color: ${(p) => p.theme.textBtn.primary.default};

    &: hover {
      color: ${(p) => p.theme.textBtn.primary.hovered};
    }
  }
`;

export { NavLink };
