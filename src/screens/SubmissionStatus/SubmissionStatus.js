import React from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View, Image, StyleSheet } from 'react-native';
import { styles } from '@/screens/SubmissionStatus/SubmissionStatus.styles';
import { spacing, typography } from '@/theme';
import { Button } from '@/components';
import { successIcon, pendingIcon, failureIcon } from '@/assets';
import { strings } from '@/localization';

export function SubmissionStatus({ route }) {
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
    statusCircle3: {
      width: 200,
      height: 200,
      borderRadius: 200 / 2,
      backgroundColor:
        ticketStatus === 'success'
          ? 'rgba(5, 168, 24, 0.2)'
          : ticketStatus === 'pending'
          ? 'rgba(249, 208, 84, 0.2)'
          : 'rgba(179, 38, 30, 0.2)',
    },
    statusCircle2: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor:
        ticketStatus === 'success'
          ? 'rgba(5, 168, 24, 0.3)'
          : ticketStatus === 'pending'
          ? 'rgba(249, 208, 84, 0.3)'
          : 'rgba(179, 38, 30, 0.3)',
      marginTop: spacing.m,
      marginLeft: spacing.m,
    },
    statusCircle1: {
      backgroundColor:
        ticketStatus === 'success'
          ? colors.success
          : ticketStatus === 'pending'
          ? colors.pending
          : colors.failure,
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
        <View style={confirmationTicketStyles.statusCircle3}>
          <View style={confirmationTicketStyles.statusCircle2}>
            <View style={confirmationTicketStyles.statusCircle1}>
              <Image
                accessibilityIgnoresInvertColors
                source={
                  ticketStatus === 'success'
                    ? successIcon
                    : ticketStatus === 'pending'
                    ? pendingIcon
                    : failureIcon
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
