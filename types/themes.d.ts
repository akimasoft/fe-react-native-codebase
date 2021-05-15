/*
 * Project: Akimasoft-Mobile
 * Author: Akimabs
 * -----
 * Modified By: the developer formerly known as akimabs at <ahakimabs@gmail.com>
 * -----
 * Copyright (c) 2021 Akimasoft
 */

import { ImageSourcePropType } from 'react-native';

export interface Colors {
  primary: string;
  warning: string;
  danger: string;
  success: string;
  background_color: string;
}

export enum Typography {
  title = 17,
  subtitle = 15,
  captions = 13,
  description = 10,
}

export enum Align {
  right = 'right',
  left = 'left',
  center = 'center',
  justify = 'justify',
}

export enum Font {}

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

export enum RadiusSizes {
  small = 5,
  medium = 7,
  large = 10,
  extra_large = 15,
}

export enum DialogType {
  alert,
  confirm,
  prompt,
}

export enum ToastType {
  info,
  success,
  error,
}
