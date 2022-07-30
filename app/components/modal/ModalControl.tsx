import React, { useEffect, useRef, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableOpacity,
    ActivityIndicator,
    Platform,
} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import { VectorColor } from '../color/VectorColor';
import { scale } from '../ScalingUtils';
import { FlexModal, FlexModalHandler } from './FlexModal';
import useDeepCompareEffect from 'use-deep-compare-effect';

interface DropDownSearchOption {
    name: string | null;
    value: string | null;
    num: number | null
}

interface PropsModal {
    show: boolean;
    selected: string;
    onDimiss: () => void;
    data: DropDownSearchOption[] | null;
    onSelected: (lable: string, value: string, num: number) => void;
    title?: string;
    dropdownSelected: string | null;
}

const ModalItem = ({
    show,
    onDimiss,
    data,
    onSelected,
    selected,
    title,
    dropdownSelected,
}: PropsModal) => {
    const modalRef = useRef<FlexModalHandler | null>(null);

    useEffect(() => {
        if (show) {
            handleOpen();
        }
    }, [show]);

    const handleOpen = () => {
        if (modalRef.current) {
            modalRef.current.open({
                title: '',
                message: '',
            });
        }
    };

    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.dismiss();
        }
        onDimiss();
    };

    return (
        <FlexModal
            containerStyle={{ backgroundColor: 'white', borderRadius: 20 }}
            ref={modalRef}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}>
            <View style={{}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderBottomWidth: 2,
                        borderBottomColor: '#F4F4F4',
                        paddingBottom: 18,
                    }}>
                    <Text style={{ color: VectorColor.grey33, fontSize: 20, fontWeight: 'bold' }}>
                        {title}
                    </Text>
                    <TouchableOpacity
                        onPress={handleClose}
                        style={{ position: 'absolute', right: 0, zIndex: 1 }}>
                        <Feather name="x" color={VectorColor.grey33} size={24} />
                    </TouchableOpacity>
                </View>
                {data?.map((_, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                onSelected(_.name || '', _.value || '', _.num || 0), handleClose();
                            }}>
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    borderBottomWidth: 2,
                                    borderBottomColor: '#F4F4F4',
                                    paddingTop: 16,
                                    paddingBottom: 12,
                                    justifyContent: 'space-between',
                                    marginHorizontal: 4,
                                }}>
                                <Text style={{ color: VectorColor.grey33, fontSize: 16 }}>{_.name}</Text>
                                {selected === `${_.name}` ? (
                                    <Feather name={'check'} size={26} color={VectorColor.red} />
                                ) : (
                                    <View />
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </FlexModal>
    );
};
export interface PropsForm {
    title?: string;
    key?: string;
    inputAccessoryViewID?: string;
    placeholder?: string;
    onChangeText?: (value: string) => void;
    children?: JSX.Element;
    keyRef?: React.MutableRefObject<Input | null>;
    onSubmitEditing?: () => void;
    titleModal?: string;
    onSelected: (name: string | null, value: string | null, num: number | null) => void;
    keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
    rightIcon?: JSX.Element;
    dropdownSelected: string | null;
    secureTextEntry?: boolean;
    flagLabel?: boolean;
    titleChild?: boolean;
    onBlur?: () => void;
    value?: string;
    disabled?: boolean;
    onTouchStart?: () => void;
    editable?: boolean;
    data: DropDownSearchOption[] | null;
    pointerEvents?: 'none' | 'box-none' | 'box-only' | 'auto' | undefined;
    stylesProps?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    maxLength?: number;
    inputStyles?: TextStyle;
    stylesTitle?: StyleProp<TextStyle>;
    returnKeyType?:
    | 'default'
    | 'none'
    | 'search'
    | 'done'
    | 'go'
    | 'next'
    | 'send'
    | 'previous'
    | 'google'
    | 'join'
    | 'route'
    | 'yahoo'
    | 'emergency-call'
    | undefined;
    onFocus?: () => void;
}

export const ModalControl = (props: PropsForm) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<DropDownSearchOption[] | null>(props.data);
    const [disabled, setDisabled] = useState(props.disabled);

    const onSelected = (name: string, _: string, num: number) => {
        setSelected(`${name}`);
        props.onSelected(name, _, num);
    };

    useDeepCompareEffect(() => {
        setData(props.data);
    }, [props.data || {}]);

    useEffect(() => {
        setDisabled(props.disabled);
    }, [props.disabled]);

    useEffect(() => {
        setLoading(data === null && !disabled);
    }, [data, disabled]);

    useEffect(() => {
        if (props?.dropdownSelected) {
            setSelected(props?.dropdownSelected);
        }
    }, [props?.dropdownSelected]);

    return (
        <>
            <View>
                <Input
                    editable={Platform.OS === 'ios' ? false : true}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                    defaultValue={props.value}
                    ref={props.keyRef}
                    inputAccessoryViewID={props.inputAccessoryViewID}
                    style={styles.input}
                    pointerEvents={props.pointerEvents}
                    autoCapitalize="none"
                    returnKeyType={props.returnKeyType}
                    disabled={false}
                    value={selected}
                    selectionColor={'transparent'}
                    labelStyle={styles.title}
                    rightIcon={
                        isLoading ? (
                            <ActivityIndicator size="small" color="#434a54" />
                        ) : (
                            <TouchableOpacity onPress={() => setShowModal(true)}>
                                <Icon type="evilicon" name="chevron-down" size={scale(24)} color="black" />
                            </TouchableOpacity>
                        )
                    }
                    label={
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                {props.title && (
                                    <Text style={[styles.title, props.stylesTitle]}>{props.title}</Text>
                                )}
                                {!props.flagLabel && <Text style={[styles.title, { color: 'red' }]}> *</Text>}
                            </View>
                        </View>
                    }
                    placeholder={props.placeholder}
                    inputStyle={[styles.input, { borderBottomWidth: 0 }, props.inputStyles]}
                    inputContainerStyle={[styles.inputBorderBottomStyle, props.inputContainerStyle]}
                    containerStyle={[props.stylesProps, { paddingHorizontal: 0 }]}
                    onChangeText={props.onChangeText}
                    placeholderTextColor={VectorColor.greyba}
                    onSubmitEditing={props.onSubmitEditing}
                    onBlur={props.onBlur}
                    showSoftInputOnFocus={false}
                    onTouchStart={() => setShowModal(true)}
                    maxLength={props.maxLength}
                />
                {props.children}
            </View>
            <ModalItem
                show={showModal}
                onDimiss={() => setShowModal(false)}
                data={props.data}
                onSelected={onSelected}
                dropdownSelected={props.dropdownSelected}
                selected={selected}
                title={props.titleModal}
            />
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: scale(40),
        color: VectorColor.black,
        fontSize: scale(15),
        fontWeight: 'normal',
    },
    title: {
        fontSize: scale(14),
        color: VectorColor.grey33,
        fontWeight: '500',
    },
    error: {
        fontSize: scale(12),
        color: 'red',
        marginTop: scale(5),
    },
    inputBorderBottomStyle: {
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 1,
    },
});
