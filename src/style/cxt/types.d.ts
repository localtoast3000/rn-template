export interface StyleConfig {
  themes: Themes;
  styles: Styles;
}

export interface Styles {
  [type: string]: {
    [value: string]: any;
  };
}

export interface Themes {
  [name: string]: Theme;
}
export type HexColor = `#${string}`;

export interface Theme {
  [key: string]: HexColor | undefined;
}
