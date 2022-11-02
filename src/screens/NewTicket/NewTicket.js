import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation, useTheme } from '@react-navigation/native';
import { compressImageConvertToBase64 } from '../../utils/compressImageConvertToBase64';
import { Button, ControlledTextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Login/Login.styles';
import { shadow } from '@/theme';

export function NewTicket() {
  const navigation = useNavigation();
  var ImagePicker = require('react-native-image-picker');
  const [images, setImages] = useState([]);
  let testing = '';
  const { colors } = useTheme();

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

  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    maxWidth: 1024,
    maxHeight: 1024,
  };

  const onSubmit = (data) => {
    navigation.navigate('ConfirmTicket', { ticket: { ...data } });
  };

  //Launch Camera
  const cameraLaunch = () => {
    ImagePicker.launchCamera(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled camera launch');
      } else if (res.error) {
        console.log('Camera Launch Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button on camera launch: ', res.customButton);
      } else {
        alert(JSON.stringify(res));
        if (!res.errorCode) {
          compressImageConvertToBase64(res?.assets[0].uri);
        }
        setImages((images) => [...images, res]);
      }
    });
  };

  //Launch Image Gallery
  const imageGalleryLaunch = () => {
    ImagePicker.launchImageLibrary(options, async (res) => {
      if (res.didCancel) {
        console.log('User cancelled image gallery');
      } else if (res.error) {
        console.log('Image Gallery Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button on image/gallery launch: ', res.customButton);
      } else {
        alert(JSON.stringify(res));
        if (!res.errorCode) {
          testing = compressImageConvertToBase64(res?.assets[0].uri);
          console.log('testing ============================', testing);
        }
        setImages((images) => [...images, res]);
      }
    });
  };

  //Remove the file
  const removeFile = (index) => {
    const filteredArray = [...images];
    filteredArray.splice(index, 1);
    setImages(filteredArray);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.white }]}>
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
      <View>
        <Text>Pick Images from Camera & Gallery</Text>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={cameraLaunch}
          style={styles.submitButton}
        >
          <Text>Launch Camera Directly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={imageGalleryLaunch}
          style={styles.submitButton}
        >
          <Text>Launch Image Gallery</Text>
        </TouchableOpacity>
        {images &&
          images.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item?.assets[0]?.fileName}</Text>
                <Button onPress={() => removeFile(index)} title="Delete" />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
}
