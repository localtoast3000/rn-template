module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    'wildcard',
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@': './src',
          '@root': './',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
