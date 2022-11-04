import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import {
  ViewTicket,
  NewTicket,
  Customer,
  ConfirmTicket,
  ConfirmationSuccessPending,
} from '@/screens';

const Stack = createNativeStackNavigator();

export function CustomerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerLargeTitle: false }}>
      <Stack.Screen
        name={NAVIGATION.customer}
        component={Customer}
        options={{ headerLargeTitle: false }}
      />
      <Stack.Screen
        name={NAVIGATION.newTicket}
        component={NewTicket}
        options={{ headerLargeTitle: false }}
      />
      <Stack.Screen
        name={NAVIGATION.confirmTicket}
        component={ConfirmTicket}
        options={{ headerLargeTitle: false }}
      />
      <Stack.Screen
        name={NAVIGATION.viewTicket}
        component={ViewTicket}
        options={{ headerLargeTitle: false }}
      />
      <Stack.Screen
        name={NAVIGATION.confirmationSuccessPending}
        component={ConfirmationSuccessPending}
        options={{ headerLargeTitle: false }}
      />
    </Stack.Navigator>
  );
}
