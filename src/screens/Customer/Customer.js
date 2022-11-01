import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '@/screens/Customer/Customer.styles';
import { Button } from '@/components';
import { getTickets } from '@/selectors/TicketSelectors';

export function Customer() {
  const navigation = useNavigation();
  const tickets = useSelector(getTickets);
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <ScrollView>
        <Text>
          I am the customer screen screen, here there will be a list of tickets and I'll be able to
          create a new ticket
        </Text>
        <Button
          onPress={() => navigation.navigate('CustomerNavigator', { screen: 'NewTicket' })}
          style={styles.submitButton}
          title="Create new ticket"
        />
        {tickets &&
          tickets.length > 0 &&
          tickets.map((ticket) => (
            <Button
              onPress={() =>
                navigation.navigate('CustomerNavigator', {
                  screen: 'ViewTicket',
                  params: { ticketId: ticket.id },
                })
              }
              style={styles.submitButton}
              title={`View ticket ${ticket.id}`}
            />
          ))}
      </ScrollView>
    </View>
  );
}
