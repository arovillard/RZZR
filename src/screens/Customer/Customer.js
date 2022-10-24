import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { styles } from '@/screens/Customer/Customer.styles';
import { Button } from '@/components';

export function Customer() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>
        I am the customer screen screen, here there will be a list of tickets and I'll be able to
        create a new ticket
      </Text>
      <Button
        onPress={() => navigation.navigate('CustomerNavigator', { screen: 'NewTicket' })}
        style={styles.submitButton}
        title="Create new ticket"
      />
      <Button
        onPress={() => navigation.navigate('CustomerNavigator', { screen: 'ViewTicket' })}
        style={styles.submitButton}
        title="View ticket"
      />
    </View>
  );
}
