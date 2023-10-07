import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react';
import { Form, Input, validators } from '@/components/form/exports';
import { Button } from '@/components/pressables/exports';
import req from '@/lib/requests/apis/main';
import { useUserActions } from '@/redux/reducers/user';
import { AppNavigation } from '@/navigation/types';

export default function Login({ navigation }: AppNavigation<'login'>) {
  const [serverError, setServerError] = useState(false);
  const [notExistCount, setNotExistCount] = useState(0);
  const { mountUser } = useUserActions();

  return (
    <View className='flex-1 p-[20px]'>
      {notExistCount >= 3 ? (
        <NotExistRedirectView navigation={navigation} />
      ) : notExistCount > 0 ? (
        <Text className='text-error'>Account does not exist</Text>
      ) : serverError ? (
        <Text className='text-error'>Failed to submit login form, please try again</Text>
      ) : (
        <></>
      )}
      {notExistCount >= 3 ? (
        <></>
      ) : (
        <Form
          onSubmit={async ({ values }) => {
            try {
              const res = await req.post('/user/session/start', values);
              const data = await res.json();
              if (!data.result) {
                if (data.notExists) {
                  setNotExistCount((count) => count + 1);
                  return;
                }
                setServerError(true);
                return;
              }
              setNotExistCount(0);
              setServerError(false);
              mountUser(data.user);
              navigation.push('landing');
            } catch (err) {
              console.log(err);
              setServerError(true);
            }
          }}
          defaultValues={{
            email: '',
            password: '',
          }}>
          <Input
            name='email'
            type='email'
            label='Email'
            rules={validators.email}
          />
          <Input
            name='password'
            type='password'
            label='Password'
            rules={validators.name}
          />
          <Button
            submitter
            label='Submit'
          />
        </Form>
      )}
    </View>
  );
}

function NotExistRedirectView({ navigation }: AppNavigation<'login'>) {
  return (
    <View className='flex-1 items-center w-full justify-center'>
      <View className='flex w-full'>
        <Text className='text-center text-[30px] mb-[100px] text-first'>
          Create an account!
        </Text>
        <Button
          onPress={() => navigation.push('sign-up')}
          label='Sign up'
        />
      </View>
    </View>
  );
}
