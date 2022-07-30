import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createIconSet } from 'react-native-vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { icons } from './fonts/__icontype';
import { IconFont, IconFontProps } from './icon-font';


const Icon: any = createIconSet(icons, 'iconfont', 'iconfont.ttf');

export interface IconFontLayerProps extends IconFontProps {
  backgroundColor: string;
  backgroundSize?: number;
  backgroundOpacity?: number;
}

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const IconFontLayer: React.FunctionComponent<IconFontLayerProps> = (props) => {
  const { backgroundColor, backgroundOpacity, backgroundSize, ...rest } = props;
  const backSize = backgroundSize || rest.size + 24;
  return (
    <View
      style={{
        backgroundColor,
        width: backSize,
        height: backSize,
        borderRadius: backSize / 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: backgroundColor,
        opacity: backgroundOpacity || 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ height: rest.size, width: rest.size, }}>
        {rest?.name === 'calendar' ? <Feather {...rest} /> : <IconFont {...rest} />}
      </View>
    </View>
  );
};
