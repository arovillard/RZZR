import React, { useEffect } from 'react';
import { useNavigation, useTheme, useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '@/screens/Customer/Customer.styles';
import { Button } from '@/components';
import { getUser } from '@/selectors/UserSelectors';
import { getCustomer as getCustomerSelector } from '@/selectors/CustomerSelectors';
import { getCustomerTickets } from '@/selectors/TicketSelectors';
import { getTickets } from '@/actions/TicketActions';

export function Customer({ route }) {
  const { customerId } = route.params;
  const user = useSelector(getUser);
  const customer = useSelector(getCustomerSelector(customerId));
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const tickets = useSelector(getCustomerTickets(customerId));
  const { colors } = useTheme();

  useEffect(() => {
    if (isFocused) {
      dispatch(getTickets(user.id, customer.id));
    }
  }, [dispatch, customer.id, isFocused, user.id]);

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: colors.white }]}>
        <Text>
          I am the customer screen, here there will be a list of tickets and I'll be able to create
          a new ticket
        </Text>
        <Button
          style={styles.submitButton}
          title="Create new ticket"
          onPress={() => navigation.navigate('CustomerNavigator', { screen: 'NewTicket' })}
        />
        {tickets &&
          Object.keys(tickets).length > 0 &&
          Object.keys(tickets).map((key) => (
            <Button
              key={tickets[key].id}
              onPress={() =>
                navigation.navigate('CustomerNavigator', {
                  screen: 'ViewTicket',
                  params: { ticketId: tickets[key].id, customerId: customer.id },
                })
              }
              style={styles.submitButton}
              title={`View ticket ${tickets[key].id}`}
            />
          ))}
      </View>
    </ScrollView>
  );
}
