import React from 'react';
import { ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Button, ControlledTextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Login/Login.styles';
import { shadow } from '@/theme';

export function NewTicket() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: '',
      warehouse: '',
      date: '',
      partNumber: '',
      lotNumber: '',
      surgeon: '',
      poNumber: '',
    },
  });

  const onSubmit = (data) => {
    navigation.navigate('ConfirmTicket', { ticket: { ...data } });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.formContainer, shadow.primary]}>
        <ControlledTextField
          name="customerName"
          errors={errors.customerName}
          control={control}
          rules={{
            required: true,
          }}
          accessibilityHint={strings.ticket.inputFieldHint}
          accessibilityLabel={strings.ticket.customerName}
          placeholder={strings.ticket.customerName}
        />
        <ControlledTextField
          name="warehouse"
          errors={errors.warehouse}
          control={control}
          rules={{
            required: true,
          }}
          accessibilityHint={strings.ticket.inputFieldHint}
          accessibilityLabel={strings.ticket.warehouse}
          placeholder={strings.ticket.warehouse}
        />
        <ControlledTextField
          name="date"
          errors={errors.date}
          control={control}
          rules={{
            required: true,
          }}
          accessibilityHint={strings.ticket.inputFieldHint}
          accessibilityLabel={strings.ticket.date}
          placeholder={strings.ticket.date}
        />
        <ControlledTextField
          name="surgeon"
          errors={errors.surgeon}
          control={control}
          rules={{
            required: true,
          }}
          accessibilityHint={strings.ticket.inputFieldHint}
          accessibilityLabel={strings.ticket.surgeon}
          placeholder={strings.ticket.surgeon}
        />

        <ControlledTextField
          name="partNumber"
          errors={errors.partNumber}
          control={control}
          rules={{
            required: true,
          }}
          accessibilityHint={strings.ticket.inputFieldHint}
          accessibilityLabel={strings.ticket.partNumber}
          placeholder={strings.ticket.partNumber}
        />
        <ControlledTextField
          name="lotNumber"
          errors={errors.lotNumber}
          control={control}
          rules={{
            required: true,
          }}
          accessibilityHint={strings.ticket.inputFieldHint}
          accessibilityLabel={strings.ticket.lotNumber}
          placeholder={strings.ticket.lotNumber}
        />
        <ControlledTextField
          name="poNumber"
          errors={errors.poNumber}
          control={control}
          rules={{
            required: true,
          }}
          accessibilityHint={strings.ticket.inputFieldHint}
          accessibilityLabel={strings.ticket.poNumber}
          placeholder={strings.ticket.poNumber}
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          style={styles.submitButton}
          title={strings.ticket.buttonReview}
        />
      </View>
    </ScrollView>
  );
}
