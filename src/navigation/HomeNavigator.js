import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CustomerNavigator } from './CustomerNavigator';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} component={Home} />
      <Stack.Screen name={NAVIGATION.customerNavigator} component={CustomerNavigator} />
    </Stack.Navigator>
  );
}
