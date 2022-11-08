import React from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View, Image, StyleSheet } from 'react-native';
import { styles } from '@/screens/SubmissionStatus/SubmissionStatus.styles';
import { spacing, typography } from '@/theme';
import { Button } from '@/components';
import { successIcon, pendingIcon, failureIcon } from '@/assets';
import { strings } from '@/localization';

const confirmationTicketStyles = StyleSheet.create({
  imageWrapper: {
    top: 100,
  },
  statusCircle3: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  statusCircle2: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: spacing.m,
    marginLeft: spacing.m,
  },
  statusCircle1: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.m,
    marginLeft: spacing.m,
  },
});

export function SubmissionStatus({ route }) {
  const navigation = useNavigation();
  const { ticketStatus } = route.params;
  const { ticket } = route.params;
  const { colors } = useTheme();

  const statusMap = {
    success: {
      icon: successIcon,
      color1: colors.success,
      color2: 'rgba(5, 168, 24, 0.2)',
      color3: 'rgba(5, 168, 24, 0.3)',
      message: strings.ticket.ticketStatusSucess,
      buttonTitle: strings.ticket.buttonSuccess,
    },
    pending: {
      icon: pendingIcon,
      color1: colors.pending,
      color2: 'rgba(249, 208, 84, 0.2)',
      color3: 'rgba(249, 208, 84, 0.3)',
      message: strings.ticket.ticketStatusPending,
      buttonTitle: strings.ticket.buttonPending,
    },
    failure: {
      icon: failureIcon,
      color1: colors.failure,
      color2: 'rgba(179, 38, 30, 0.2)',
      color3: 'rgba(179, 38, 30, 0.3)',
      message: strings.ticket.ticketStatusFaliure,
      buttonTitle: strings.ticket.buttonFailure,
    },
  };

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
          style={[
            confirmationTicketStyles.statusCircle3,
            { backgroundColor: statusMap[ticketStatus].color3 },
          ]}
        >
          <View
            style={[
              confirmationTicketStyles.statusCircle2,
              { backgroundColor: statusMap[ticketStatus].color2 },
            ]}
          >
            <View
              style={[
                confirmationTicketStyles.statusCircle1,
                { backgroundColor: statusMap[ticketStatus].color1 },
              ]}
            >
              <Image accessibilityIgnoresInvertColors source={statusMap[ticketStatus].icon} />
            </View>
          </View>
        </View>
      </View>

      <Text style={[typography.text, { paddingTop: spacing.xl, textAlign: 'center' }]}>
        {statusMap[ticketStatus].message}
      </Text>

      <Button onPress={handleSubmit} title={statusMap[ticketStatus].buttonTitle} />
    </View>
  );
}
