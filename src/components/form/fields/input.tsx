import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { EyeBlind, EyeVisible } from '@/components/graphics/icons/exports';
import { tailwindConfig } from '@/lib/tailwind-util';
import { FieldProps } from './form-fields';

const theme = tailwindConfig.theme.colors;

interface InputProps extends FieldProps {
  classNames?: {
    container?: string;
    error?: string;
    message?: string;
  };
}

export default function Input({
  register,
  name,
  type = '',
  rules = {},
  controlled = true,
  error,
  classNames = {
    container: '',
    error: '',
  },
  ...props
}: InputProps) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View className={`w-full mb-[20px] ${classNames.container}`}>
      <TextInput
        {...props}
        {...(() => {
          if (type === 'password') {
            return {
              right: hidePassword ? (
                <TextInput.Icon
                  icon={() => <EyeBlind className='fill-second w-[25px] h-[25px]' />}
                  onPress={() => setHidePassword(false)}
                />
              ) : (
                <TextInput.Icon
                  icon={() => <EyeVisible className='fill-second w-[25px] h-[25px]' />}
                  onPress={() => setHidePassword(true)}
                />
              ),
              secureTextEntry: hidePassword,
            };
          }
          return {};
        })()}
        {...register(name, rules)}
        error={Boolean(error)}
        theme={{
          colors: {
            primary: theme.first,
            accent: theme.dark,
            placeholder: theme.dark,
            text: theme.dark,
            background: 'transparent',
            error: theme.error,
          },
        }}
        style={{
          backgroundColor: 'transparent',
        }}
        underlineColor={theme.dark}
        underlineColorAndroid={theme.dark}
      />
      <Text
        style={{ color: theme.error }}
        className={`${classNames.error} text-error ${error?.message ? 'mt-[10px]' : ''}`}>
        {error?.message}
      </Text>
    </View>
  );
}
