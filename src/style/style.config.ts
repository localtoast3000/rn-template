import type { StyleConfig } from './cxt/types';

const styleConfig: StyleConfig = {
  themes: {
    light: {
      primary: '#3786EB',
      secondary: '#F3747F',
      third: '#F9AA4B',
      fourth: '#18B797',
      neutral: '#95a5a6',
      base: '#F9F9FB',
      baseHighlight: '#ffffff',
      baseContrast: '#4B4E6D',
      baseContrastBold: '#272C56',
      error: '#e74c3c',
    },
  },
  styles: {
    text: {
      100: {
        fontFamily: 'WorkSans-Thin',
      },
      italic100: {
        fontFamily: 'WorkSans-ThinItalic',
      },
      200: {
        fontFamily: 'WorkSans-ExtraLight',
      },
      italic200: {
        fontFamily: 'WorkSans-ExtraLightItalic',
      },
      300: {
        fontFamily: 'WorkSans-Light',
      },
      italic300: {
        fontFamily: 'WorkSans-LightItalic',
      },
      400: {
        fontFamily: 'WorkSans-Regular',
      },
      italic400: {
        fontFamily: 'WorkSans-RegularItalic',
      },
      500: {
        fontFamily: 'WorkSans-Medium',
      },
      italic500: {
        fontFamily: 'WorkSans-MediumItalic',
      },
      600: {
        fontFamily: 'WorkSans-SemiBold',
      },
      italic600: {
        fontFamily: 'WorkSans-SemiBoldItalic',
      },
      700: {
        fontFamily: 'WorkSans-Bold',
      },
      italic700: {
        fontFamily: 'WorkSans-BoldItalic',
      },
      800: {
        fontFamily: 'WorkSans-ExtraBold',
      },
      italic800: {
        fontFamily: 'WorkSans-ExtraBoldItalic',
      },
      900: {
        fontFamily: 'WorkSans-Black',
      },
      italic900: {
        fontFamily: 'WorkSans-BlackItalic',
      },
    },
  },
};

export default styleConfig;
