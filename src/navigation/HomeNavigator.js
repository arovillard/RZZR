import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CustomerNavigator } from './CustomerNavigator';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NAVIGATION.home}
        component={Home}
        screenOptions={{ headerLargeTitle: false }}
      />
      <Stack.Screen name={NAVIGATION.customerNavigator} component={CustomerNavigator} />
    </Stack.Navigator>
  );
}
