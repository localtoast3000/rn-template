import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { useThemeCxt } from '@/style/exports';
import BottomTabsNavigator from '@/navigation/stacks/bottom-tabs-app-stack';

interface FullPageLayoutProps {
  children: ReactNode;
  scrollable?: boolean;
  withBottomTabs?: boolean;
}

export default function FullPageLayout({
  children,
  scrollable = false,
  withBottomTabs = false,
}: FullPageLayoutProps) {
  const { theme } = useThemeCxt();

  return (
    <>
      <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.base }]}>
        {scrollable ? (
          <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
        ) : (
          <View style={styles.container}>{children}</View>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
