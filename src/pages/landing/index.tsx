import React from 'react';
import { Text, View } from 'react-native';
import { FullPageLayout } from '@/components/layouts/exports';
import { Button } from '@/components/pressables/exports';
import { AppNavigation } from '@/navigation/types';
import { useThemeCxt, ThemeType, font } from '@/style/exports';

export default function Landing({ navigation }: AppNavigation<'landing'>) {
  const { theme } = useThemeCxt();
  const styles = styleSheet(theme);

  return (
    <FullPageLayout scrollable={false}>
      <Text style={styles.header}>TimeToDo</Text>
      <View style={styles.btnsWrapper}>
        <Button
          label='Sign Up'
          onPress={() => navigation.push('sign-up')}
          styles={styles.btn}
        />
        <View style={styles.btnsDivider} />
        <Button
          label='Login'
          onPress={() => navigation.push('login')}
          styles={styles.btn}
        />
      </View>
    </FullPageLayout>
  );
}

const styleSheet = (theme: ThemeType) => {
  return {
    header: {
      ...font.main[800],
      fontSize: 50,
      color: theme.baseContrastBold,
      textAlign: 'center' as 'center',
    },
    btnsWrapper: {
      marginTop: 'auto' as 'auto',
    },
    btnsDivider: {
      marginVertical: 10,
    },
    btn: {
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
    },
  };
};
