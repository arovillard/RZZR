import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation, useTheme } from '@react-navigation/native';
import { compressImageConvertToBase64 } from '../../utils/compressImageConvertToBase64';
import { Button, ControlledTextField } from '@/components';
import { strings } from '@/localization';
import { shadow, spacing, typography } from '@/theme';
import { camera, library, close } from '@/assets';

export function NewTicket() {
  const navigation = useNavigation();
  var ImagePicker = require('react-native-image-picker');
  const [images, setImages] = useState([]);
  let compressedString = '';
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

  const newTicketStyles = StyleSheet.create({
    container: {
      paddingHorizontal: spacing.s,
    },
    formContainer: {
      width: '100%',
    },
    imagesWrapper: {
      flexDirection: 'row',
    },
    imagesContainer: {
      flex: 1,
      backgroundColor: colors.lightGrey,
      borderRadius: 3,
      paddingTop: spacing.s,
      paddingBottom: spacing.s,
      paddingLeft: spacing.m,
      paddingRight: spacing.m,
      marginRight: spacing.l,
      alignItems: 'center',
    },
    submitButton: {
      marginTop: spacing.l,
    },
    textWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginRight: spacing.l,
      marginTop: spacing.xs,
    },
    cancelButton: {
      left: '90%',
      right: '69.74%',
      bottom: '440%',
    },
    addedImagesStyle: {
      width: 94,
      height: 60,
    },
    addedImagesWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

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
      } else {
        if (res.errorCode === 'camera_unavailable') {
          alert(JSON.stringify(res));
        }
        if (!res.errorCode) {
          setImages((images) => [...images, res]);
        }
      }
    });
  };

  //Launch Image Gallery
  const imageGalleryLaunch = () => {
    ImagePicker.launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled image gallery');
      } else if (res.error) {
        console.log('Image Gallery Error: ', res.error);
      } else {
        if (!res.errorCode) {
          setImages((images) => [...images, res]);
        }
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
    <ScrollView
      contentContainerStyle={[newTicketStyles.container, { backgroundColor: colors.white }]}
    >
      <View style={[newTicketStyles.formContainer, shadow.primary]}>
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

        <Text style={[typography.text, { color: colors.textLight, marginBottom: spacing.m }]}>
          {strings.ticket.textAddPhotos}
        </Text>

        <View style={newTicketStyles.addedImagesWrapper}>
          {images &&
            images.map((item, index) => {
              compressedString = compressImageConvertToBase64(item?.assets[0].uri);
              console.log('compressedString', compressedString);
              return (
                <View key={index}>
                  <Image
                    accessibilityIgnoresInvertColors
                    source={{
                      uri: item?.assets[0]?.uri,
                    }}
                    style={newTicketStyles.addedImagesStyle}
                  />
                  <TouchableOpacity accessibilityRole="button" onPress={() => removeFile(index)}>
                    <Image
                      accessibilityIgnoresInvertColors
                      source={close}
                      style={newTicketStyles.cancelButton}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>

        <View style={newTicketStyles.imagesWrapper}>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={cameraLaunch}
            style={newTicketStyles.imagesContainer}
          >
            <Image accessibilityIgnoresInvertColors source={camera} />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={imageGalleryLaunch}
            style={newTicketStyles.imagesContainer}
          >
            <Image accessibilityIgnoresInvertColors source={library} />
          </TouchableOpacity>
        </View>

        <View style={newTicketStyles.textWrapper}>
          <Text style={[typography.label, { color: colors.textLight }]}>
            {strings.ticket.textCamera}
          </Text>
          <Text style={[typography.label, { color: colors.textLight }]}>
            {strings.ticket.textLibrary}
          </Text>
        </View>

        <Button
          onPress={handleSubmit(onSubmit)}
          style={newTicketStyles.submitButton}
          title={strings.ticket.buttonReview}
        />
      </View>
    </ScrollView>
  );
}
