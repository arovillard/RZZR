import React from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View, Image, StyleSheet } from 'react-native';
import { styles } from '@/screens/SuccessPendingFailure/SuccessPendingFailure.styles';
import { spacing, typography } from '@/theme';
import { Button } from '@/components';
import { success, pending, failure } from '@/assets';
import { strings } from '@/localization';

export function SuccessPendingFailure({ route }) {
  const navigation = useNavigation();
  const { ticketStatus } = route.params;
  const { ticket } = route.params;
  const { colors } = useTheme();

  const confirmationTicketStyles = StyleSheet.create({
    imageWrapper: {
      position: 'absolute',
      top: 100,
    },
    textWrapper: {
      paddingTop: spacing.xl,
    },
    successCircle3: {
      width: 200,
      height: 200,
      borderRadius: 200 / 2,
      backgroundColor: 'rgba(5, 168, 24, 0.2)',
    },
    successCircle2: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor: 'rgba(5, 168, 24, 0.3)',
      marginTop: spacing.m,
      marginLeft: spacing.m,
    },
    successCircle1: {
      backgroundColor: colors.sucess,
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: spacing.m,
      marginLeft: spacing.m,
    },
    pendingCircle3: {
      width: 200,
      height: 200,
      borderRadius: 200 / 2,
      backgroundColor: 'rgba(249, 208, 84, 0.2)',
    },
    pendingCircle2: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor: 'rgba(249, 208, 84, 0.3)',
      marginTop: spacing.m,
      marginLeft: spacing.m,
    },
    pendingCircle1: {
      backgroundColor: colors.pending,
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: spacing.m,
      marginLeft: spacing.m,
    },
    failureCircle3: {
      width: 200,
      height: 200,
      borderRadius: 200 / 2,
      backgroundColor: 'rgba(179, 38, 30, 0.2)',
    },
    failureCircle2: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor: 'rgba(179, 38, 30, 0.3)',
      marginTop: spacing.m,
      marginLeft: spacing.m,
    },
    failureCircle1: {
      backgroundColor: colors.failure,
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: spacing.m,
      marginLeft: spacing.m,
    },
  });

  const handleSubmit = () => {
    if (ticketStatus === 'success' || ticketStatus === 'pending') {
      navigation.navigate('CustomerNavigator', { screen: 'Customer' });
    } else {
      navigation.navigate('ConfirmTicket', { ticket: ticket });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <View style={confirmationTicketStyles.imageWrapper}>
        <View
          style={
            ticketStatus === 'success'
              ? confirmationTicketStyles.successCircle3
              : ticketStatus === 'pending'
              ? confirmationTicketStyles.pendingCircle3
              : confirmationTicketStyles.failureCircle3
          }
        >
          <View
            style={
              ticketStatus === 'success'
                ? confirmationTicketStyles.successCircle2
                : ticketStatus === 'pending'
                ? confirmationTicketStyles.pendingCircle2
                : confirmationTicketStyles.failureCircle2
            }
          >
            <View
              style={
                ticketStatus === 'success'
                  ? confirmationTicketStyles.successCircle1
                  : ticketStatus === 'pending'
                  ? confirmationTicketStyles.pendingCircle1
                  : confirmationTicketStyles.failureCircle1
              }
            >
              <Image
                accessibilityIgnoresInvertColors
                source={
                  ticketStatus === 'success'
                    ? success
                    : ticketStatus === 'pending'
                    ? pending
                    : failure
                }
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[typography.text, { paddingTop: spacing.xl, textAlign: 'center' }]}>
        {ticketStatus === 'success'
          ? strings.ticket.ticketStatusSucess
          : ticketStatus === 'pending'
          ? strings.ticket.ticketStatusPending
          : strings.ticket.ticketStatusFaliure}
      </Text>
      <Button
        onPress={handleSubmit}
        style={styles.submitButton}
        title={
          ticketStatus === 'success'
            ? strings.ticket.buttonSuccess
            : ticketStatus === 'pending'
            ? strings.ticket.buttonPending
            : strings.ticket.buttonFailure
        }
      />
    </View>
  );
}
