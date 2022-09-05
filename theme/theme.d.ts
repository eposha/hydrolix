import { DefaultTheme } from 'styled-components';

export interface ITheme extends DefaultTheme {
  name: string;
  base: string;
  color: {
    gray: string[];
    blue: string[];
    danger: string[];
    warning: string[];
    success: string[];
  };
  btn: {
    primary: {
      bg: {
        default: string;
        hovered: string;
        disabled: string;
      };
      color: {
        default: string;
        hovered: string;
        disabled: string;
      };
    };
    secondary: {
      bg: {
        default: string;
        hovered: string;
        disabled: string;
      };
      color: {
        default: string;
        hovered: string;
        disabled: string;
      };
    };
    outlined: {
      default: string;
      hovered: string;
      disabled: string;
    };
  };
  textBtn: {
    primary: {
      default: string;
      hovered: string;
      disabled: string;
    };
    secondary: {
      default: string;
      hovered: string;
      disabled: string;
    };
  };
  typo: {
    p: {
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      lineHeight: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
    };
    h: {
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      lineHeight: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
  };
}
