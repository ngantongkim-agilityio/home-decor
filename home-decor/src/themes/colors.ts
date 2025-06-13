export const colors = {
  light: '#ffffff',
  dark: '#363130',
  primary: '#f4b5a4',
  secondary: '#cc7862',
  tertiary: '#f0e1d2',
  quaternary: '#dcbeb6',
  textPrimary: '#363130',
  textSecondary: '#36312f',
  textTertiary: '#4b4544',
  textLight: '#909090',
  textHighlight: '#27ae60',
  textError: '#eb5757',
  bgLight: '#bdbdbd',
  bgDark: '#4b4544',
  bgPrimary: '#ffffff',
  bgSecondary: '#f0e1d2',
  bgTertiary: '#fefefe',
  placeholder: '#c0c0c0',
  border: '#e0e0e0',
  shadowPrimary: 'rgba(138 149 158 / 1.0)',
  shadowSecondary: 'rgba(48 48 48 / 1.0)',
  error: '#e42222',
};

const lightTheme = {
  ...colors,
};

const darkTheme = {
  ...colors,
  textPrimary: '#ffffff',
  textSecondary: '#ffffff',
  textTertiary: '#f4b5a4',
  bgPrimary: '#36312f',
  bgSecondary: '#4b4544',
};

export const systemThemes = {
  light: lightTheme,
  dark: darkTheme,
};
