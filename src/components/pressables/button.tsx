import React from 'react';
import {
  Pressable,
  View,
  GestureResponderEvent,
  Text,
  type PressableProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface ButtonProps extends PressableProps {
  label?: string | undefined;
  submitter?: boolean;
  styles?: {
    container?: ViewStyle;
    animatedLayer?: ViewStyle;
    label?: TextStyle;
    button?: ViewStyle;
  };
  onPressIn?: (e: GestureResponderEvent) => void;
  onPressOut?: (e: GestureResponderEvent) => void;
}

export default function Button({
  label,
  styles = {
    container: {},
    animatedLayer: {},
    label: {},
    button: {},
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
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      ...styles.animatedLayer,
    };
  });

  return (
    <View
      style={{
        position: 'relative',
      }}>
      <Pressable
        {...props}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          ...styles.button,
        }}
        onPressIn={(e) => {
          onPressIn(e);
          animated.value = withTiming(0, { duration: 100 });
        }}
        onPressOut={(e) => {
          onPressOut(e);
          animated.value = withTiming(1, { duration: 200 });
        }}>
        <Animated.View style={animatedStyle} />
        {label ? <Text style={styles.label}>{label}</Text> : <>{children}</>}
      </Pressable>
    </View>
  );
}
