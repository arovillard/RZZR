import React from 'react';
import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { TextField, ErrorView } from '@/components';

export const ControlledTextField = ({
  control,
  name,
  rules,
  accessibilityHint,
  accessibilityLabel,
  placeholder,
  errors,
}) => {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            autoCapitalize="none"
            accessibilityHint={accessibilityHint}
            accessibilityLabel={accessibilityLabel}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
      {errors && <ErrorView errors={['This is required.']} />}
    </View>
  );
};
