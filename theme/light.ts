import { ITheme } from './theme';

const lightTheme: ITheme = {
  name: 'light',
  base: 'default',
  color: {
    gray: [
      '#FFFFFF',
      '#F7F7F7',
      '#EBEEF1',
      '#CFD4E2',
      '#BCBEC9',
      '#ACAFBD',
      '#9598A4',
      '#77797D',
      '#6D6E6F',
      '#4B4D57',
      '#222329',
      '#262e3a80',
      '#262626',
    ],
    blue: [
      '#F9FAFD',
      '#F2F6FD',
      '#E0EAFF',
      '#82ABFF',
      '#5A73F9',
      '#2261DE',
      '#4555E9',
      '#4B55A9',
      '#495C83',
    ],
    danger: ['#FFF5F4', '#FFB7BB', '#F93A44', '#B70F23'],
    warning: ['#FFF9E2', '#FFDDAB', '#F59424', '#B76E00'],
    success: ['#F4FCF9', '#BFF5E2', '#4ACD9E', '#20A776'],
  },
  btn: {
    primary: {
      bg: {
        default: '#4555E9',
        hovered: '#5A73F9',
        disabled: '#5A73F9',
      },
      color: {
        default: '#FFFFFF',
        hovered: '#FFFFFF',
        disabled: '#B3CAEF',
      },
    },
    secondary: {
      bg: {
        default: '#EBEEF1',
        hovered: '#CFD4E2',
        disabled: '#EBEEF1',
      },
      color: {
        default: '#4B4D57',
        hovered: '#4B4D57',
        disabled: '#9598A4',
      },
    },
    outlined: {
      default: '#77797D',
      hovered: '#5A73F9',
      disabled: '#ACAFBD',
    },
  },
  textBtn: {
    primary: {
      default: '#4555E9',
      hovered: '#4B55A9',
      disabled: '#ACAFBD',
    },
    secondary: {
      default: '#9598A4',
      hovered: '#6D6E6F',
      disabled: '#BCBEC9',
    },
  },
  typo: {
    p: {
      size: {
        xs: '11px',
        sm: '12px',
        md: '14px',
        lg: '16px',
        xl: '18px',
      },
      lineHeight: {
        xs: '18px',
        sm: '20px',
        md: '22px',
        lg: '24px',
        xl: '26px',
        xxl: '32px',
      },
    },
    h: {
      size: {
        xs: '18px',
        sm: '20px',
        md: '24px',
        lg: '30px',
        xl: '38px',
        xxl: '56px',
      },
      lineHeight: {
        xs: '26px',
        sm: '28px',
        md: '32px',
        lg: '46px',
        xl: '64px',
      },
    },
  },
};

export default lightTheme;
