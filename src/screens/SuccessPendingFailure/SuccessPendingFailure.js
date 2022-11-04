import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, StyleSheet } from 'react-native';
import { styles } from '@/screens/SuccessPendingFailure/SuccessPendingFailure.styles';
import { spacing, typography } from '@/theme';
import { Button } from '@/components';
import { success, pending, failure } from '@/assets';

export function SuccessPendingFailure() {
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

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      {/* Success */}
      {/* <View style={confirmationTicketStyles.imageWrapper}>
        <View style={confirmationTicketStyles.successCircle3}>
          <View style={confirmationTicketStyles.successCircle2}>
            <View style={confirmationTicketStyles.successCircle1}>
              <Image accessibilityIgnoresInvertColors source={success} />
            </View>
          </View>
        </View>
      </View>
      <Text style={[typography.text, { paddingTop: spacing.xl, textAlign: 'center' }]}>
        Your usage Ticket has been successfully submitted.
      </Text>
      <Button
        // onPress={handleSubmit(onSubmit)}
        style={styles.submitButton}
        title="Done"
      /> */}
      {/* Pending */}
      {/* <View style={confirmationTicketStyles.imageWrapper}>
        <View style={confirmationTicketStyles.pendingCircle3}>
          <View style={confirmationTicketStyles.pendingCircle2}>
            <View style={confirmationTicketStyles.pendingCircle1}>
              <Image accessibilityIgnoresInvertColors source={pending} />
            </View>
          </View>
        </View>
      </View>
      <Text style={[typography.text, { paddingTop: spacing.xl, textAlign: 'center'}]}>
        You are currently not connected to the internet. Once you regain access to your network you
        will have to manually submit this usage ticket.
      </Text>
      <Button
        // onPress={handleSubmit(onSubmit)}
        style={styles.submitButton}
        title="View Pending Ticket"
      /> */}
      {/* Failure */}
      <View style={confirmationTicketStyles.imageWrapper}>
        <View style={confirmationTicketStyles.failureCircle3}>
          <View style={confirmationTicketStyles.failureCircle2}>
            <View style={confirmationTicketStyles.failureCircle1}>
              <Image accessibilityIgnoresInvertColors source={failure} />
            </View>
          </View>
        </View>
      </View>
      <Text style={[typography.text, { paddingTop: spacing.xl, textAlign: 'center' }]}>
        Submission failed. Please try submitting the ticket again.
      </Text>
      <Button
        // onPress={handleSubmit(onSubmit)}
        style={styles.submitButton}
        title="Try Again"
      />
    </View>
  );
}
