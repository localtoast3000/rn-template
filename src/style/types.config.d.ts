import { HexColor } from './lib/types';

export interface AppThemes {
  light: AppTheme;
  dark: AppTheme;
}

export type AppThemeTypes = keyof AppThemes;

export interface AppTheme {
  base: HexColor;
  baseHighlight: HexColor;
  baseContrast: HexColor;
  baseContrastBold: HexColor;
  primary: HexColor;
  primaryFocus: HexColor;
  primaryContrast: HexColor;
  secondary: HexColor;
  secondaryFocus: HexColor;
  secondaryContrast: HexColor;
  third: HexColor;
  thirdFocus: HexColor;
  thirdContrast: HexColor;
  fourth: HexColor;
  fourthFocus: HexColor;
  fourthContrast: HexColor;
  neutral: HexColor;
  neutralFocus: HexColor;
  neutralContrast: HexColor;
  error: HexColor;
  errorFocus: HexColor;
  errorContrast: HexColor;
}
