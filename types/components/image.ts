import { ImageSourcePropType } from 'react-native';

type imageType = ImageSourcePropType | string;

interface ImageAuth {
  splash_screen: imageType;
}

export interface Images {
  /*
   * for this will return only images in auth modules and pages
   */
  auth: ImageAuth;
}
