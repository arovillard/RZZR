import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2A4499',
      secondary: '#00ADEF',
      error: '#D32F2F',
      text: '#000',
      textLight: '#686868',
      border: '#212121',
      activeTab: '#2A4499',
      inactiveTab: '#a3a2a2',
      white: '#fff',
      lightGrey: '#F2F5F7',
      sucess: '#05A818',
      pending: '#F9D054',
      failure: '#B3261E',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#212121',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#FFFFFF',
      activeTab: '#4FC3F7',
      inactiveTab: '#FFFFFF',
      white: '#fff',
      lightGrey: '#F2F5F7',
    },
  },
};
