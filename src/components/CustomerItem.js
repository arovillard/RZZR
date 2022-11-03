import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native';

export function CustomerItem({ item }) {
  const { colors } = useTheme();
  return <Text style={{ color: colors.textLight }}>{item.name}</Text>;
}

CustomerItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object).isRequired,
};
