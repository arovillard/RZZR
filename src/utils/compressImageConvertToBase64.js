import ImgToBase64 from 'react-native-image-base64';
import { Image } from 'react-native-compressor';

let value = '';
export function compressImageConvertToBase64(uri) {
  Image.compress(uri, { compressionMethod: 'auto' }).then((compressedString) =>
    ImgToBase64.getBase64String(compressedString)
      .then((base64String) => {
        value = base64String;
      })
      .catch((err) => console.log('err base64', err))
      .catch((err) => console.log('err image compress', err))
  );
  return value;
}
