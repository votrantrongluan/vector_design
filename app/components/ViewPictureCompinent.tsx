import AsyncStorage from '@react-native-community/async-storage'
import React, { useCallback, useRef, useState } from 'react'
import {
  Animated,
  Dimensions,
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native'
import Share from 'react-native-share'
// @ts-ignore
import Video from 'react-native-video'
import { CheckBox } from 'react-native-elements'
import FastImage from 'react-native-fast-image'
import { image, keyPath } from '../modules/Auth/screens/galery/GaleryScreen'
import { KEY_STORAGE } from '../utils/constants'
import { VectorColor } from './color/VectorColor'
import { FlexModal, FlexModalHandler } from './modal/FlexModal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/AntDesign'
import { scale as scaleSize } from './ScalingUtils'
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useFocusEffect } from '@react-navigation/native'
const { width, height } = Dimensions.get('window')

interface Props {
  data: [] | any
  isShow?: boolean
}

export const ViewPictureComponent = ({ data, isShow }: Props) => {
  const [list, setList] = useState<any>(data || [])
  const [showShare, setShare] = useState<boolean>(false)
  const [isSelected, setSelection] = useState<string[]>([])
  const [uriView, setUriView] = useState<string>('')
  const modalImageRef = useRef<FlexModalHandler | null>(null)

  useFocusEffect(
    useCallback(() => {
      setList(data)
    }, [data]),
  )

  function validateName(name?: any, value?: string) {
    var isValidName = true
    if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(name) ||
      !/^[A-Z]/.test(name) ||
      /\d+/g.test(name)
    ) {
      isValidName = false
    }
    if (!isValidName) return keyPath + value
    else return value
  }

  const handleDelete = () => {
    AsyncStorage.getItem(KEY_STORAGE.KEY_IMAGE).then((response?: any) => {
      const res = JSON.parse(response).filter(
        (e: any) => !isSelected.includes(e?.uri),
      )
      AsyncStorage.setItem(KEY_STORAGE.KEY_IMAGE, JSON.stringify(res))
      let newDirectory = Object.values(
        res.reduce((acc: any, item: any) => {
          if (!acc[item.date])
            acc[item.date] = {
              date: item.date,
              uri: [],
            }
          acc[item.date].uri.push(item.uri)
          return acc
        }, {}),
      )
      setList(newDirectory)
      setShare(false)
      setSelection([])
    })
  }

  const updateFieldChanged = (name?: any) => {
    setSelection((prev) => [...prev, name])
    const res_check = isSelected?.filter((item) => item === name)
    const res_response = isSelected?.filter((item) => item !== name)
    if (res_check?.length > 0) {
      return setSelection(res_response)
    }
  }

  const handleOpen = useCallback(() => {
    if (modalImageRef.current) {
      modalImageRef.current.open({
        title: '',
        message: '',
      })
    }
  }, [])

  const handleClose = useCallback(() => {
    setUriView('')
    if (modalImageRef.current) {
      modalImageRef.current.dismiss()
    }
  }, [])

  const Item = ({ item }: any) => {
    return (
      <View style={{ marginTop: 12 }}>
        <Text
          style={{
            color: 'black',
            fontSize: scaleSize(17),
            marginBottom: scaleSize(6),
            fontWeight: 'bold',
            marginLeft: scaleSize(40),
          }}
        >
          {item?.date}
        </Text>
        <FlatList
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (showShare) return updateFieldChanged(item)
                  setUriView(item)
                  handleOpen()
                }}
                onLongPress={() => {
                  LayoutAnimation.easeInEaseOut()
                  setShare(true)
                  updateFieldChanged(item)
                }}
              >
                <View>
                  {item?.includes('.mov') || item?.includes('.mp4') ? (
                    <>
                      <FastImage
                        source={{ uri: image }}
                        style={{
                          width: width / 3,
                          height: scaleSize(130),
                          marginHorizontal: scaleSize(2),
                          marginVertical: scaleSize(3),
                        }}
                      />
                      <FontAwesome6
                        name="playcircleo"
                        size={scaleSize(40)}
                        color={VectorColor.red}
                        style={{
                          position: 'absolute',
                          alignSelf: 'center',
                          top: scaleSize(50),
                        }}
                      />
                    </>
                  ) : (
                    <FastImage
                      source={{ uri: validateName('file://', item) }}
                      style={{
                        width: width / 3,
                        height: scaleSize(130),
                        marginHorizontal: scaleSize(2),
                        marginVertical: scaleSize(3),
                      }}
                    />
                  )}
                  {showShare && (
                    <CheckBox
                      checked={isSelected.includes(item)}
                      checkedColor={'red'}
                      onPress={() => updateFieldChanged(item)}
                      containerStyle={styles.checkbox}
                    />
                  )}
                </View>
              </TouchableOpacity>
            )
          }}
          horizontal={false}
          numColumns={3}
          data={item?.uri}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    )
  }

  const scale = new Animated.Value(1)

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale: scale },
      },
    ],
    {
      useNativeDriver: true,
    },
  )

  const onPinchStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
    }
  }

  const handleshare = async () => {
    const options = {
      message: '',
      urls: isSelected,
      email: 'luanlapluan@gmail.com',
      subject: 'Thêm dự án',
    }

    await Share.open(options)
  }

  const ItemCameraList = ({ item }: any) => {
    return (
      <View style={{ marginTop: 12 }}>
        <TouchableOpacity
          onPress={() => {
            if (showShare) return updateFieldChanged(item)
            setUriView(item)
            handleOpen()
          }}
          onLongPress={() => {
            if (isShow) return
            LayoutAnimation.easeInEaseOut()
            setShare(true)
            updateFieldChanged(item)
          }}
        >
          <View>
            {item?.includes('.mov') || item?.includes('.mp4') ? (
              <>
                <FastImage
                  source={{ uri: validateName('file://', item) }}
                  style={{
                    width: width / 3,
                    height: scaleSize(130),
                    marginHorizontal: scaleSize(2),
                    marginVertical: scaleSize(3),
                  }}
                />
                <FontAwesome6
                  name="playcircleo"
                  size={scaleSize(40)}
                  color={VectorColor.red}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    top: scaleSize(50),
                  }}
                />
              </>
            ) : (
              <FastImage
                source={{ uri: validateName('file://', item) }}
                style={{
                  width: width / 3,
                  height: scaleSize(130),
                  marginHorizontal: scaleSize(2),
                  marginVertical: scaleSize(3),
                }}
              />
            )}
            {showShare && (
              <CheckBox
                checked={isSelected.includes(item)}
                checkedColor={'red'}
                onPress={() => updateFieldChanged(item)}
                containerStyle={styles.checkbox}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  if (list?.length <= 0)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontSize: scaleSize(17), color: 'black' }}>
          Chưa có hình ảnh hoặc video
        </Text>
      </View>
    )

  return (
    <>
      {showShare && (
        <TouchableOpacity
          onPress={() => {
            setShare(false)
            setSelection([])
          }}
        >
          <EvilIcons
            style={{ position: 'absolute', zIndex: 2, right: 10, top: 10 }}
            name="close"
            color={VectorColor.black}
            size={scaleSize(30)}
          />
        </TouchableOpacity>
      )}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <FlatList
          style={{ marginTop: scaleSize(10) }}
          renderItem={({ item }) => {
            return isShow ? (
              <ItemCameraList item={item} />
            ) : (
              <Item item={item} />
            )
          }}
          data={list}
          horizontal={false}
          numColumns={!isShow ? undefined : 3}
          keyExtractor={(_, index) => index.toString()}
        />

        <FlexModal
          containerStyle={[styles.containerImage, { margin: 0, padding: 0 }]}
          ref={modalImageRef}
          modalStyle={{ padding: 0, margin: 0 }}
          animationIn={'zoomIn'}
          animationOut={'zoomOut'}
        >
          <View style={styles.containerImageRow}>
            <TouchableOpacity
              style={{
                left: scaleSize(10),
                position: 'absolute',
                zIndex: 99,
                top: Platform.OS === 'ios' ? scaleSize(40) : 10,
              }}
              onPress={() => handleClose()}
            >
              <Ionicons
                name={'arrow-back'}
                size={scaleSize(30)}
                color={VectorColor.white}
              />
            </TouchableOpacity>
            {uriView?.includes('.mov') || uriView?.includes('.mp4') ? (
              <Video
                source={{ uri: uriView }} // Can be a URL or a local file.
                style={styles.backgroundVideo}
              />
            ) : (
              <GestureHandlerRootView>
                <PinchGestureHandler
                  onGestureEvent={onPinchEvent}
                  onHandlerStateChange={onPinchStateChange}
                >
                  <Animated.Image
                    source={{ uri: uriView ? validateName('file://', uriView) : '' }}
                    style={{
                      width,
                      height,
                      // aspectRatio: 0.7,
                      transform: [{ scale: scale }],
                    }}
                    resizeMode="cover"
                  />
                </PinchGestureHandler>
              </GestureHandlerRootView>
            )}
          </View>
        </FlexModal>
        {showShare && (
          <View
            style={{
              paddingVertical: scaleSize(10),
              paddingHorizontal: scaleSize(40),
              backgroundColor: VectorColor.white,
              position: 'absolute',
              zIndex: 1,
              bottom: 0,
              margin: scaleSize(20),
              borderRadius: scaleSize(10),
              flexDirection: 'row',
              alignSelf: 'center',
              borderWidth: 0.2,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={handleshare}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: scaleSize(10),
                marginHorizontal: scaleSize(8),
              }}
            >
              <>
                <AntDesign
                  name="sharealt"
                  size={18}
                  color={VectorColor.black}
                />
                <Text
                  style={{
                    fontSize: scaleSize(14),
                    color: VectorColor.black,
                    marginTop: scaleSize(4),
                  }}
                >
                  Gửi
                </Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: scaleSize(10),
                marginHorizontal: scaleSize(8),
              }}
              onPress={handleDelete}
            >
              <AntDesign name="delete" size={18} color={VectorColor.black} />
              <Text
                style={{
                  fontSize: scaleSize(14),
                  color: VectorColor.black,
                  marginTop: scaleSize(4),
                }}
              >
                Xóa
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  containerImageRow: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  containerImage: {
    flex: 1,
    backgroundColor: VectorColor.black,
  },
  containerModal: {
    backgroundColor: VectorColor.red,
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
    height: '40%',
  },
  checkbox: {
    position: 'absolute',
    zIndex: 1,
    right: scaleSize(-14),
    bottom: scaleSize(-8),
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
