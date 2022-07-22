import Modal, { Direction } from 'react-native-modal';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import React, { useState, useImperativeHandle, forwardRef, ForwardRefRenderFunction } from 'react';
import { Button } from 'react-native-elements';
import { Animation, CustomAnimation } from 'react-native-animatable';
import { scale } from '../ScalingUtils';

const styles = StyleSheet.create({
  container: {
    padding: scale(16),
    backgroundColor: 'white',
    borderRadius: scale(8),
  },
  header: {},
  body: {
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: scale(2),
  },
  body__title: {
    fontWeight: 'bold',
    fontSize: scale(16),
    textAlign: 'center',
  },
  body__message: {
    fontSize: scale(14),
    textAlign: 'justify',
    marginTop: scale(8),
  },
  title: {
    fontSize: scale(15),
    textAlign: 'justify',
    marginTop: scale(12),
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

interface OpenParams {
  title?: string;
  message: string;
  block?: boolean;
}

export interface FlexModalHandler {
  open: ({ title, message }: OpenParams) => void;
  openSuccess: ({ title, message }: OpenParams) => void; // Open with success UI
  openCongrat: ({ title, message }: OpenParams) => void; // Open with Congrat UI
  openFail: ({ title, message }: OpenParams) => void; // Open with Fail UI
  openMaintain: ({ title, message, block }: OpenParams) => void; // Open with Maintain UI
  dismiss: (params?: any) => void;
}

type AnimationConfig = Animation | CustomAnimation;

const defaultProps = {
  animationIn: 'zoomIn' as AnimationConfig,
  animationOut: 'zoomOut' as AnimationConfig,
};

type Props = {
  headerView?: JSX.Element;
  bodyView?: JSX.Element;
  footerView?: JSX.Element;
  modalStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  animationIn?: AnimationConfig;
  animationOut?: AnimationConfig;
  children?: JSX.Element;
  swipeDirection?: Direction | Array<Direction>;
  onShow?: () => void;
  onBackdropPress?: () => void;
  onDimiss?: (params?: any) => void;
  onSwipeComplete?: () => void;
  backdropColor?: string;
  animationOutTiming?: number;
  backdropTransitionOutTiming?: number;
  backdropOpacity?: number;
  propagateSwipe?: boolean;
} & Partial<typeof defaultProps>;

enum ModalType {
  CUSTOM,
  SUCCESS,
  FAIL,
  CONGRAT,
  MAINTAIN,
}

export const FlexModalRef: ForwardRefRenderFunction<FlexModalHandler, Props> = (props, ref) => {
  const {
    headerView,
    footerView,
    bodyView,
    modalStyle,
    animationIn,
    animationOut,
    onDimiss,
    containerStyle,
    children,
    onShow,
    onBackdropPress,
    onSwipeComplete,
    swipeDirection,
    backdropOpacity,
    animationOutTiming = 400,
    backdropTransitionOutTiming = 400,
    propagateSwipe,
    backdropColor,
  } = props;
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.CUSTOM);
  const [info, setInfo] = useState<OpenParams>({
    title: '',
    message: '',
  });
  const [dismissParams, setDismissParams] = useState<any>();

  useImperativeHandle(ref, () => ({
    open: (params) => {
      setModalType(ModalType.CUSTOM);
      setInfo(params);
      setVisible(true);
    },
    openSuccess: (params) => {
      setModalType(ModalType.SUCCESS);
      setInfo(params);
      setVisible(true);
    },
    openFail: (params) => {
      setModalType(ModalType.FAIL);
      setInfo(params);
      setVisible(true);
    },
    openCongrat: (params) => {
      setModalType(ModalType.CONGRAT);
      setInfo(params);
      setVisible(true);
    },
    openMaintain: (params) => {
      setModalType(ModalType.MAINTAIN);
      setInfo(params);
      setVisible(true);
    },
    dismiss: (params) => {
      setDismissParams(params);
      setVisible(false);
    },
  }));

  return (
    <Modal
      isVisible={visible}
      animationIn={animationIn}
      animationOut={animationOut}
      animationInTiming={400}
      animationOutTiming={animationOutTiming}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={backdropTransitionOutTiming}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      avoidKeyboard={true}
      style={modalStyle}
      onModalShow={onShow}
      onModalHide={() => (onDimiss ? onDimiss(dismissParams) : undefined)}
      onBackdropPress={onBackdropPress}
      onSwipeComplete={onSwipeComplete}
      swipeDirection={swipeDirection}
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      propagateSwipe={propagateSwipe}>
      {children ? (
        <View style={[styles.container, containerStyle]}>{children}</View>
      ) : (
        <View style={[styles.container, containerStyle]}>
          <View style={styles.body}>
            <Text style={styles.body__title}>{info.title}</Text>
            {bodyView ? (
              <View>
                <Text style={styles.body__message}>{info.message}</Text>
                {bodyView}
              </View>
            ) : (
              <Text
                style={[
                  styles.body__message,
                  modalType === ModalType.MAINTAIN && { textAlign: 'center' },
                ]}>
                {info.message}
              </Text>
            )}
          </View>
          {!info.block ? (
            <View style={styles.footer}>
              {footerView ? (
                footerView
              ) : (
                <Button
                  type={'clear'}
                  title={'Xác nhận'}
                  onPress={() => {
                    setVisible(false);
                  }}
                />
              )}
            </View>
          ) : (
            <View style={{ paddingBottom: 16 }} />
          )}
        </View>
      )}
    </Modal>
  );
};

export const FlexModal = forwardRef(FlexModalRef);
FlexModal.defaultProps = defaultProps;
