import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { typography } from '@/theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 1,
    height: 40,
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
});

export function Button({ style, textStyle, title, secondary, disabled, ...rest }) {
  const { colors } = useTheme();
  const buttonVariants = StyleSheet.create({
    primary: {
      borderColor: colors.primary,
      backgroundColor: colors.primary,
    },
    secondary: {
      borderColor: colors.secondary,
      backgroundColor: colors.white,
    },
    disabled: {
      opacity: 0.5,
    },
  });

  return (
    <TouchableOpacity
      style={[
        styles.button,
        secondary ? buttonVariants.secondary : buttonVariants.primary,
        disabled && buttonVariants.disabled,
        style,
      ]}
      disabled={disabled}
      {...rest}
    >
      <Text
        style={[
          secondary ? { color: colors.secondary } : { color: colors.white },
          typography.title,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  secondary: false,
  disabled: false,
};
