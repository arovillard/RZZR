import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, StyleSheet } from 'react-native';
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
    navigation.navigate('CustomerNavigator', { screen: 'Customer' });
  };

  const confirmTicketStyles = StyleSheet.create({
    reviewImagesWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    reviewImagesStyle: {
      width: 94,
      height: 60,
    },
  });

  const replacePhotosArray = (key, value) => {
    if (key === 'photos') {
      return '';
    } else {
      return value;
    }
  };

  const omitPhotosArray = JSON.stringify(ticket, replacePhotosArray, 2);

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <Text>Here we are going to review the ticket before submit</Text>

      <Text>{omitPhotosArray}</Text>

      <View style={confirmTicketStyles.reviewImagesWrapper}>
        {ticket.photos &&
          ticket.photos.map((item, index) => {
            return (
              <View key={index}>
                <Image
                  accessibilityIgnoresInvertColors
                  source={{
                    uri: item,
                  }}
                  style={confirmTicketStyles.reviewImagesStyle}
                />
              </View>
            );
          })}
      </View>

      <Button
        onPress={submitForm}
        style={styles.submitButton}
        title={isLoading ? strings.common.loading : strings.ticket.buttonSubmit}
      />
    </View>
  );
}
