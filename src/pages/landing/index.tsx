import React from 'react';
import { FullPageLayout } from '@/components/layouts/exports';
import { H1 } from '@/components/text/exports';
import { Chat as ChatIcon } from '@/components/graphics/icons/exports';
import { Button } from '@/components/pressables/exports';
import { AppNavigation } from '@/navigation/types';

export default function Landing({ navigation }: AppNavigation<'landing'>) {
  return (
    <FullPageLayout scrollable={false}>
      <H1 style={{ fontSize: 50 }}>TimeToDo</H1>
      <Button
        label='Sign Up'
        onPress={() => navigation.push('sign-up')}
      />
      <Button
        label='Login'
        onPress={() => navigation.push('login')}
      />
    </FullPageLayout>
  );
}
