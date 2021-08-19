import { StyleProp, TextStyle } from 'react-native';
import { Colors } from '../index';

export enum FontSize {
  large_title = 24,
  title = 20,
  subtitle = 16,
  caption = 14,
  description = 12,
}

export interface TextProp {
  type: 'bold' | 'semibold' | 'regular' | 'thin';
  align: 'center' | 'right' | 'left' | 'justify';
  size: FontSize | number;
  color: Colors;
  style: StyleProp<TextStyle>;
  children: any;
}
