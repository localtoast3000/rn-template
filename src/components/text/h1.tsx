import React from 'react';
import { Text, TextProps } from 'react-native';

export default function H1({ children, ...props }: TextProps) {
  return (
    <Text
      {...props}
      className={`text-6xl py-[10px] md:text-8xl font-title-900 w-full ${
        props?.className && props.className
      }`}>
      {children}
    </Text>
  );
}
