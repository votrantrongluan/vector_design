import * as React from 'react';
import { createIconSet } from 'react-native-vector-icons';
import { icons, IconTypes } from './fonts/__icontype';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export const Icon: any = createIconSet(icons, 'iconfont', 'iconfont.ttf');

export interface IconFontProps {
  name: IconTypes
  color?: string
  size: number
  style?: ViewStyle
}

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const IconFont: React.FunctionComponent<IconFontProps> = (props) => {
    return <Icon {...props} />;
};
