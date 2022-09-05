import styled from 'styled-components';

interface IParagraph {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  lineHeight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  $color?: number;
}

const H1 = styled.h1`
  font-size: ${(p) => p.theme.typo.h.size.xl};
  line-height: ${(p) => p.theme.typo.h.lineHeight.xl};
  font-weight: 600;
`;

const H2 = styled.h2`
  font-size: ${(p) => p.theme.typo.h.size.lg};
  line-height: ${(p) => p.theme.typo.h.lineHeight.lg};
  font-weight: 600;
`;

const H3 = styled.h3`
  font-size: ${(p) => p.theme.typo.h.size.md};
  line-height: ${(p) => p.theme.typo.h.lineHeight.md};
  font-weight: 600;
`;

const H4 = styled.h4`
  font-size: ${(p) => p.theme.typo.h.size.sm};
  line-height: ${(p) => p.theme.typo.h.lineHeight.sm};
  font-weight: 600;
`;

const H5 = styled.h5`
  font-size: ${(p) => p.theme.typo.h.size.xs};
  line-height: ${(p) => p.theme.typo.h.lineHeight.xs};
  font-weight: 600;
`;

const Text = styled.p<IParagraph>`
  font-size: ${(p) => (p.size ? p.theme.typo.p.size[p.size] : p.theme.typo.p.size.md)};
  color: ${(p) => p.theme.color.gray[p.$color ?? 9]};
  line-height: ${(p) =>
    p.lineHeight
      ? p.theme.typo.p.lineHeight[p.lineHeight]
      : p.size
      ? p.theme.typo.p.lineHeight[p.size]
      : p.theme.typo.p.lineHeight.md};

  &.bold {
    font-weight: 600;
  }

  &.centered {
    text-align: center;
  }
`;

const InlineText = styled.span<IParagraph>`
  font-size: ${(p) => (p.size ? p.theme.typo.p.size[p.size] : p.theme.typo.p.size.md)};
  line-height: ${(p) =>
    p.size ? p.theme.typo.p.lineHeight[p.size] : p.theme.typo.p.lineHeight.md};

  &.bold {
    font-weight: 600;
  }

  &.centered {
    text-align: center;
  }
`;

export { H1, H2, H3, H4, H5, Text, InlineText };
