export interface ColorOptions {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  success: string;
  error: string;
  warning: string;
  disabled: string;
  divider: string;
  white: string;
  black: string;
  blackDark: string;
  blackLight: string;
  blackGrey: string;
  border: string;
  notification: string;
  backdrop: string;
  shadow: string;
}

export interface Theme {
  colors: ColorOptions;
}
