/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useTheme, useNavigation, useIsFocused } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '@/selectors/UserSelectors';
import { getCustomers as getCustomerSelector } from '@/selectors/CustomerSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';
import { SearchableList, CustomerItem } from '@/components';
import { getCustomers } from '@/actions/CustomerActions';
import { logo } from '@/assets';

export function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const customers = useSelector(getCustomerSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      dispatch(getCustomers(user.id));
    }
  }, [dispatch, user.id, isFocused]);

  return (
    <View style={[styles.container, { backgroundColor: colors.lightGrey }]}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          accessibilityIgnoresInvertColors
          source={logo}
          style={{
            width: 122,
            resizeMode: 'contain',
            maxWidth: '100%',
            marginTop: -10,
            marginBottom: -10,
          }}
        />
      </View>
      <View style={styles.headerText}>
        <Text style={[styles.pageHeader, typography.header, { color: colors.text }]}>
          Hello, <Text style={[{ color: colors.secondary }]}> {user?.name}</Text>
        </Text>
        <Text style={[styles.pageSubheader, typography.label, { color: colors.textLight }]}>
          To create a usage ticket, start by selecting a customer from the list below:
        </Text>
      </View>
      <View style={[styles.subContainer]}>
        <View style={[{ paddingHorizontal: 6 }]}>
          {customers && customers.length > 0 && (
            <SearchableList
              dataList={customers}
              pressHandler={() => navigation.navigate('CustomerNavigator', { screen: 'Customer' })}
              itemComponent={CustomerItem}
              searchIdentifier="name"
            />
          )}
        </View>
      </View>
    </View>
  );
}
