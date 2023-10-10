import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FullPageLayout } from '@/components/layouts/exports';
import { Button } from '@/components/pressables/exports';
import { AppNavigation } from '@/navigation/types';
import { useThemeCxt, AppTheme, font } from '@/style/exports';

export default function Home({ navigation }: AppNavigation<'reports'>) {
  const { theme } = useThemeCxt();
  const styles = styleSheet(theme);

  return (
    <FullPageLayout scrollable={false}>
      <Text style={styles.header}>Reports</Text>
    </FullPageLayout>
  );
}

const styleSheet = (theme: AppTheme) => {
  return StyleSheet.create({
    header: {
      ...font.main[800],
      fontSize: 50,
      color: theme.baseContrastBold,
      textAlign: 'center',
    },
    btnsWrapper: {
      marginTop: 'auto',
    },
    btnsDivider: {
      marginVertical: 10,
    },
    button: {
      backgroundColor: theme.primaryFocus,
      height: 60,
      borderRadius: 10,
    },
    animatedLayer: {
      backgroundColor: theme.primary,
      borderRadius: 10,
    },
    label: {
      color: theme.primaryContrast,
      ...font.main[600],
      fontSize: 18,
    },
  });
};
