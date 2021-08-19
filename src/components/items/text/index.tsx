import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { RFValue as fs } from 'react-native-responsive-fontsize';
import { Device } from 'app/utils';
import { FontSize, TextProp } from 'types';

export const Text = ({ children, size = FontSize.title, align = 'left' }: TextProp) => {
  // const {colors}: ExtendTheme = useTheme()
  const styles = StyleSheet.create({
    text: {
      fontSize: fs(Device.isIos() ? size - 3 : size),
      textAlign: align,
      // color: Colors,
      //   fontFamily,
    },
  });

  return (
    <Animated.Text
      minimumFontScale={FontSize.description}
      maxFontSizeMultiplier={1}
      style={styles.text}>
      {children}
    </Animated.Text>
  );
};
