import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { ViewTicket, NewTicket, Customer } from '@/screens';

const Stack = createNativeStackNavigator();

export function CustomerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name={NAVIGATION.customer}
        component={Customer}
        options={{ headerLargeTitle: true }}
      />
      <Stack.Screen
        name={NAVIGATION.newTicket}
        component={NewTicket}
        options={{ headerLargeTitle: true }}
      />
      <Stack.Screen
        name={NAVIGATION.viewTicket}
        component={ViewTicket}
        options={{ headerLargeTitle: true }}
      />
    </Stack.Navigator>
  );
}
