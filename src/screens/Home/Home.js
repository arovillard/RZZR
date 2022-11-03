/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';
import { SearchableList, CustomerItem } from '@/components';
import { logo } from '@/assets';

const customerData = [
  {
    id: 10070,
    name: 'Razor Test Customer 1',
    is_person: false,
    email: 'foo@bar.com',
    phone: '1233211233',
    is_active: true,
  },
  {
    id: 10071,
    name: 'Razor Test Customer 2',
    is_person: false,
    email: 'foo@bar.com',
    phone: '1233211233',
    is_active: true,
  },
  {
    id: 10072,
    name: 'Razor Test Customer 3',
    is_person: false,
    email: 'foo@bar.com',
    phone: '1233211233',
    is_active: true,
  },
  {
    id: 10073,
    name: 'Razor Test Customer 4',
    is_person: false,
    email: 'foo@bar.com',
    phone: '1233211233',
    is_active: true,
  },
  {
    id: 10074,
    name: 'Razor Test Customer 5',
    is_person: false,
    email: 'foo@bar.com',
    phone: '1233211233',
    is_active: true,
  },
  {
    id: 10075,
    name: 'Razor Test Customer 6',
    is_person: false,
    email: 'foo@bar.com',
    phone: '1233211233',
    is_active: true,
  },
  {
    id: 10076,
    name: 'Razor Test Customer 7',
    is_person: false,
    email: 'foo@bar.com',
    phone: '1233211233',
    is_active: true,
  },
];

export function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);
  const navigation = useNavigation();

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
          Hello, <Text style={[{ color: colors.secondary }]}> {user?.username}</Text>
        </Text>
        <Text style={[styles.pageSubheader, typography.label, { color: colors.textLight }]}>
          To create a usage ticket, start by selecting a customer from the list below:
        </Text>
      </View>
      <View style={[styles.subContainer]}>
        <View style={[{ paddingHorizontal: 6 }]}>
          <SearchableList
            dataList={customerData}
            pressHandler={() => navigation.navigate('CustomerNavigator', { screen: 'Customer' })}
            itemComponent={CustomerItem}
            searchIdentifier="name"
          />
        </View>
      </View>
    </View>
  );
}
