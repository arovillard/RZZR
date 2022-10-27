import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ImgToBase64 from 'react-native-image-base64';
import { styles } from '@/screens/NewTicket/NewTicket.styles';

export function NewTicket() {
  var ImagePicker = require('react-native-image-picker');
  const [state, setState] = useState(null);

  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  //Launch Camera
  const cameraLaunch = () => {
    ImagePicker.launchCamera(options, (res) => {
      console.log('Response camera launch: ', JSON.stringify(res));
      if (res.didCancel) {
        console.log('User cancelled camera launch');
      } else if (res.error) {
        console.log('Camera Launch Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button on camera launch: ', res.customButton);
      } else {
        alert(JSON.stringify(res));
        ImgToBase64.getBase64String(res.assets[0].uri)
          .then((base64String) => console.log('base64String', base64String))
          .catch((err) => console.log('err base64', err));
        setState({
          filePath: res,
        });
      }
    });
  };

  //Launch Image Gallery
  const imageGalleryLaunch = () => {
    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response image gallery: ', JSON.stringify(res));
      if (res.didCancel) {
        console.log('User cancelled image gallery');
      } else if (res.error) {
        console.log('Image Gallery Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button on image/gallery launch: ', res.customButton);
      } else {
        alert(JSON.stringify(res));
        ImgToBase64.getBase64String(res.assets[0].uri)
          .then((base64String) => console.log('base64String', base64String))
          .catch((err) => console.log('err base64', err));
        setState({
          filePath: res,
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Here we are going to create a ticket</Text>
        <Text>Pick Images from Camera & Gallery</Text>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={cameraLaunch}
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>Launch Camera Directly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={imageGalleryLaunch}
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
