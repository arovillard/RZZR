import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button } from '@/components';
import { strings } from '@/localization';
import { createTicket, TYPES } from '@/actions/TicketActions';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { styles } from '@/screens/ConfirmTicket/ConfirmTicket.styles';

export function ConfirmTicket({ route, navigation }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => isLoadingSelector([TYPES.CREATE_TICKET], state));
  const { ticket } = route.params;

  const submitForm = () => {
    dispatch(createTicket(ticket));
    navigation.navigate('CustomerNavigator', { screen: 'ConfirmationSuccessPending' });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <Text>Here we are going to review the ticket before submit</Text>
      <Text>{JSON.stringify(ticket, null, 2)}</Text>
      <Button
        onPress={submitForm}
        style={styles.submitButton}
        title={isLoading ? strings.common.loading : strings.ticket.buttonSubmit}
      />
    </View>
  );
}
