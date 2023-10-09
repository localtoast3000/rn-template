import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FullPageLayout } from '@/components/layouts/exports';
import { Button } from '@/components/pressables/exports';
import { AppNavigation } from '@/navigation/types';
import { useThemeCxt, ThemeType, font } from '@/style/exports';
import { useAuthCxt } from '@/navigation/lib/auth-cxt';

export default function Landing({ navigation }: AppNavigation<'landing'>) {
  const { setAuthenticated } = useAuthCxt();
  const { theme } = useThemeCxt();
  const styles = styleSheet(theme);

  return (
    <FullPageLayout scrollable={false}>
      <Text style={styles.header}>TimeToDo</Text>
      <View style={styles.btnsWrapper}>
        <Button
          label='Sign Up'
          onPress={() => navigation.push('sign-up')}
          styles={{
            button: styles.button,
            animatedLayer: styles.animatedLayer,
            label: styles.label,
          }}
        />
        <View style={styles.btnsDivider} />
        <Button
          label='Login'
          onPress={() => setAuthenticated(true)}
          styles={{
            button: styles.button,
            animatedLayer: styles.animatedLayer,
            label: styles.label,
          }}
        />
      </View>
    </FullPageLayout>
  );
}

const styleSheet = (theme: ThemeType) => {
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
