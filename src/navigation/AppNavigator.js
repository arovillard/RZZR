import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TabBarIcon } from '@/components';
import { NAVIGATION } from '@/constants';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({ color }) => <TabBarIcon color={color} routeName={route.name} />,
        tabBarStyle: {
          backgroundColor: colors.primary,
          paddingTop: 10,
          paddingBottom: 20,
          height: 83,
        },
      })}
    >
      <Tab.Screen name={NAVIGATION.home} component={HomeNavigator} />
      <Tab.Screen name={NAVIGATION.profile} component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
