import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { ReactNode } from 'react';

interface FullPageLayoutProps {
  children: ReactNode;
  scrollable: boolean;
}

export default function FullPageLayout({
  children,
  scrollable = false,
}: FullPageLayoutProps) {
  return (
    <>
      {scrollable ? (
        <SafeAreaView className='flex'>
          <ScrollView className='flex-1'>
            <View className='flex-1 p-[30px] font-body-400 text-dark'>{children}</View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <SafeAreaView className='flex flex-1'>
          <View className='flex-1 p-[30px] font-body-400 text-dark'>{children}</View>
        </SafeAreaView>
      )}
    </>
  );
}
