import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppTheme, useThemeCxt } from '@/style/exports';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BackgroundShape, RombusPlus } from './graphics/exports';

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { theme } = useThemeCxt();
  const { styles } = config(theme);

  return (
    <View style={styles.navbar}>
      <View style={styles.content}>
        <BackgroundShape style={styles.background} />
        <View style={styles.bottomPadding} />
        <View style={styles.tabs}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={route.name === 'new-task' ? styles.rombusPlus : styles.tabButton}>
                <Text
                  style={{
                    color: isFocused ? theme.secondary : theme.baseContrastBold,
                  }}>
                  {route.name === 'new-task' ? <RombusPlus /> : route.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const config = (theme: AppTheme) => {
  const styles = StyleSheet.create({
    navbar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      height: 80,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'transparent',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      marginHorizontal: 'auto',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    },
    tabs: {
      position: 'absolute',
      top: 5,
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      height: 80,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'transparent',
    },
    background: {
      height: '100%',
      width: '100%',
      position: 'relative',
      top: 10,
      shadowColor: theme.baseContrast,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
    bottomPadding: { backgroundColor: theme.baseHighlight, width: '100%', height: 20 },
    tabButton: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    rombusPlus: {
      transform: [{ translateY: -35 }, { translateX: 2 }],
      shadowColor: theme.baseContrast,
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 5,
    },
  });
  return { styles };
};
