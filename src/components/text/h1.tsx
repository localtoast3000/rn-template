import React from 'react';
import { Text, TextProps, StyleProp } from 'react-native';
import { useStyleCxt } from '@/style/cxt';

interface H1Props extends TextProps {
  style?: StyleProp<any>;
}

export default function H1({ children, style = {}, ...props }: H1Props) {
  const { theme, styles } = useStyleCxt();

  return (
    <Text
      {...props}
      style={{
        color: theme.secondary,
        ...styles.text['600'],
        ...style,
      }}>
      {children}
    </Text>
  );
}
