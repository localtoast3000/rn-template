export type HexColor = `#${string}`;

export interface Style {
  [value: string]: any;
}

export interface Styles {
  [type: string]: Style;
}

export interface ThemeType {
  [key: string]: HexColor | undefined;
}

export interface Theme {
  [name: string]: ThemeType;
}
