/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { spacing } from '@/theme';

export function SearchableList({ pressHandler, itemComponent, dataList, searchIdentifier }) {
  const [data, setData] = useState(dataList);
  const [value, setValue] = useState('');
  const [arrayholder, setArrayholder] = useState([]);
  const { colors } = useTheme();

  const ItemComponent = itemComponent;

  useEffect(() => {
    setArrayholder(dataList);
  }, [dataList]);

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#F2F5F7',
        }}
      />
    );
  };

  const searchFilterFunction = (text) => {
    setValue(text);
    const newData = arrayholder.filter((item) => {
      const itemData = item[searchIdentifier].toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };

  if (!data) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  const getHeader = () => {
    return searchIdentifier && searchIdentifier.length > 0 ? (
      <SearchBar
        placeholder="Search..."
        lightTheme
        onChangeText={(text) => searchFilterFunction(text)}
        autoCorrect={false}
        value={value}
        containerStyle={{
          backgroundColor: 'white',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          marginTop: spacing.xs,
        }}
        inputContainerStyle={{
          height: 43,
          backgroundColor: colors.lightGrey,
        }}
        inputStyle={{
          fontSize: 16,
          color: colors.textLight,
        }}
      />
    ) : (
      <></>
    );
  };

  return (
    <View style={{ width: '100%' }}>
      <FlatList
        style={{ backgroundColor: 'white' }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity accessibilityRole="button" onPress={pressHandler}>
            <ListItem style={{ paddingVertical: 5 }}>
              <ListItem.Content>
                <ItemComponent item={item} />
              </ListItem.Content>
              <ListItem.Chevron iconStyle={{ color: colors.textLight }} />
            </ListItem>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.email}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={getHeader()}
      />
    </View>
  );
}
