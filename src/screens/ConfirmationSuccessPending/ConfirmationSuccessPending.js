import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import { styles } from '@/screens/ConfirmationSuccessPending/ConfirmationSuccessPending.styles';
import { typography } from '@/theme';
import { Button } from '@/components';
import { success } from '@/assets';

export function ConfirmationSuccessPending() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <Image accessibilityIgnoresInvertColors source={success} style={{ width: 70, height: 70 }} />
      <Text style={[typography.text, { textAlign: 'center' }]}>
        Your usage Ticket has been successfully submitted.
      </Text>
    </View>
  );
}
