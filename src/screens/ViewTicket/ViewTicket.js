import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getTicket } from '@/selectors/TicketSelectors';
import { styles } from '@/screens/ViewTicket/ViewTicket.styles';

export function ViewTicket({ route, navigation }) {
  const { ticketId } = route.params;
  const ticket = useSelector(getTicket(ticketId));
  const { colors } = useTheme();

  const viewTicketStyles = StyleSheet.create({
    viewImagesWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    viewImagesStyle: {
      width: 94,
      height: 60,
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <Text>Here we are going to view a ticket {ticketId}</Text>
      <Text>{JSON.stringify(ticket, null, 2)}</Text>

      <View style={viewTicketStyles.viewImagesWrapper}>
        {ticket.photos &&
          ticket.photos.map((item, index) => {
            return (
              <View key={index}>
                <Image
                  accessibilityIgnoresInvertColors
                  source={{
                    uri: item,
                  }}
                  style={viewTicketStyles.viewImagesStyle}
                />
              </View>
            );
          })}
      </View>
    </View>
  );
}
