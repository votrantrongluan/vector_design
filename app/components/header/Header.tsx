import * as React from 'react';
import { View, ViewStyle, TextStyle, Text, TouchableOpacity } from 'react-native';
import { spacing } from '../theme/spacing';
import { VectorColor } from '../color/VectorColor';
import { scale } from '../ScalingUtils';
import Icon from 'react-native-vector-icons/Entypo'
// static styles

const ROOT: ViewStyle = {
    flexDirection: 'row',
    paddingHorizontal: spacing.spacing20,
    alignItems: 'flex-end',
    paddingVertical: spacing.spacing22,
};
const TITLE: TextStyle = { textAlign: 'center' };
const TITLE_MIDDLE: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
};

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const VectorHeader: React.FunctionComponent<any> = (props) => {
    const {
        onLeftPress,
        leftIcon,
        style,
        title,
        color = VectorColor.grey33,
    } = props;
    let { titleStyle } = props;

    return (
        <View style={{ ...ROOT, ...style }}>
            <TouchableOpacity accessibilityLabel="back" onPress={onLeftPress}>
                <Icon size={scale(40)} name={leftIcon} />
            </TouchableOpacity>
            <View style={TITLE_MIDDLE}>
                <Text
                    numberOfLines={2}
                    style={{ ...TITLE, ...titleStyle, color }}
                >
                    {title}
                </Text>
            </View>
            {props.children}
        </View>
    );
};
