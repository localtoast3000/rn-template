import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { EyeBlind, EyeVisible } from '@/components/graphics/icons/exports';
import { FieldProps } from './form-fields';

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
    <View>
      <TextInput
        {...props}
        {...(() => {
          if (type === 'password') {
            return {
              right: hidePassword ? (
                <TextInput.Icon
                  icon={() => <EyeBlind />}
                  onPress={() => setHidePassword(false)}
                />
              ) : (
                <TextInput.Icon
                  icon={() => <EyeVisible />}
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
            primary: '',
            accent: '',
            placeholder: '',
            text: '',
            background: '',
            error: '',
          },
        }}
        style={{
          backgroundColor: 'transparent',
        }}
        underlineColor={''}
        underlineColorAndroid={''}
      />
      <Text style={{ color: 'red' }}>{error?.message}</Text>
    </View>
  );
}
