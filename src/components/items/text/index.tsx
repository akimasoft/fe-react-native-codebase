/*
 * Project: Akimasoft-Mobile
 * Author: Akimabs
 * -----
 * Modified By: the developer formerly known as akimabs at <ahakimabs@gmail.com>
 * -----
 * Copyright (c) 2021 Akimasoft
 */
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { RFValue as fs } from 'react-native-responsive-fontsize';
import { Device } from 'app/utils';
import { Align, Font, Typography } from 'types';

interface Prop {
  /**
   * @param children must receive string or number
   * */
  children: string;
  /**
   * @param size must receive types from Typography
   * */
  size?: Typography;
  /**
   * @param fontFamily must receive types from fontFamily
   * */
  fontFamily?: Font;
  /**
   * @param align must receive types from Align (is this textAlign)
   * */
  align?: Align;
}

/**
 * A React component for displaying text which supports nesting, styling, and touch handling.
 * @param children must receive string or number
 * @param size must receive types from Typography
 * @param fontFamily must receive types from fontFamily
 * @param align must receive types from Align (is this textAlign)
 */

export const Text = ({
  //   fontFamily = Font
  children,
  size = Typography.captions,
  align = Align.left,
}: Prop) => {
  // const {colors}: ExtendTheme = useTheme()
  const styles = StyleSheet.create({
    text: {
      fontSize: fs(Device.isIos() ? size - 3 : size),
      textAlign: align,
      //   color: colors.text,
      //   fontFamily,
    },
  });

  return (
    <Animated.Text
      minimumFontScale={Typography.captions}
      maxFontSizeMultiplier={1}
      style={styles.text}>
      {children}
    </Animated.Text>
  );
};
