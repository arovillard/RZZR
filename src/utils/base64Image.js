import ImgToBase64 from 'react-native-image-base64';

export function base64Image(uri) {
  ImgToBase64.getBase64String(uri)
    .then((base64String) => console.log('base64String', base64String))
    .catch((err) => console.log('err base64', err));
}
