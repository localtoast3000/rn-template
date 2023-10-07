import React from 'react';
import { Pressable, View, PressableProps, GestureResponderEvent } from 'react-native';
import { P } from '@/components/text/exports';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface ButtonProps extends PressableProps {
  label?: string | undefined;
  submitter?: boolean;
  classNames?: {
    container?: string;
    button?: string;
    animatedLayer?: string;
    childWrapper?: string;
    label?: string;
  };
  onPressIn?: (e: GestureResponderEvent) => void;
  onPressOut?: (e: GestureResponderEvent) => void;
}

export default function Button({
  label,
  classNames = {
    container: '',
    button: '',
    animatedLayer: '',
    childWrapper: '',
    label: '',
  },
  onPressIn = () => {},
  onPressOut = () => {},
  children = <></>,
  ...props
}: ButtonProps) {
  const animated = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animated.value,
    };
  });

  return (
    <View className={`bg-third rounded-[10px] ${classNames.container}`}>
      <Pressable
        className={`${classNames.button}`}
        {...props}
        onPressIn={(e) => {
          onPressIn(e);
          animated.value = withTiming(0, { duration: 100 });
        }}
        onPressOut={(e) => {
          onPressOut(e);
          animated.value = withTiming(1, { duration: 200 });
        }}>
        <Animated.View
          className={`bg-second w-full flex items-center justify-center rounded-[10px] h-[60px] ${classNames.animatedLayer}`}
          style={animatedStyle}
        />
        <View
          className={`flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 rounded-[10px] ${classNames.childWrapper}`}>
          {label ? (
            <P className={`text-contrast text-[20px] ${classNames.label}`}>{label}</P>
          ) : (
            <>{children}</>
          )}
        </View>
      </Pressable>
    </View>
  );
}
