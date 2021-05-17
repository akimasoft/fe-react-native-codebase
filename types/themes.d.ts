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

export interface Typography {
  type: 'bold' | 'semibold' | 'regular' | 'thin';
}

export interface Align {
  align: 'center' | 'right' | 'left' | 'justify';
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

export interface RadiusSizes {
  radius: 'small' | 'medium' | 'large' | 'extra-large';
}

export interface DialogType {
  dialog_type: 'alert' | 'prompt' | 'confirm';
}

export interface ToastType {
  toast_type: 'success' | 'info' | 'error';
}
