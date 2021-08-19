import { Colors } from 'types';

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] };
}[keyof ParamList];

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: Colors;
  };
  export function useTheme(): ExtendedTheme;
}
