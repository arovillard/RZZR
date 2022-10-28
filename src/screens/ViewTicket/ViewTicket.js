import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { getTicket } from '@/selectors/TicketSelectors';
import { styles } from '@/screens/ViewTicket/ViewTicket.styles';

export function ViewTicket({ route, navigation }) {
  const { ticketId } = route.params;
  const ticket = useSelector(getTicket(ticketId));
  return (
    <View style={styles.container}>
      <Text>Here we are going to view a ticket {ticketId}</Text>
      <Text>{JSON.stringify(ticket, null, 2)}</Text>
    </View>
  );
}
