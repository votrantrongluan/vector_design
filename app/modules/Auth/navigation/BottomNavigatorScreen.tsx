import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import BottomNavigation, {
  FullTab,
  TabConfig,
} from 'react-native-material-bottom-navigation'
import LottieView from 'lottie-react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { VectorColor } from '../../../components/color/VectorColor'
import * as ImagePickerExpo from 'expo-image-picker'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import moment from 'moment'
// import { ImagePicker } from 'expo-image-multiple-picker'
import {
  FlexModal,
  FlexModalHandler,
} from '../../../components/modal/FlexModal'
import { scale } from '../../../components/ScalingUtils'
import {
  IndexIcon,
  KEY_STORAGE,
  // linkFB,
  // linkGmail,
  // linkYoutube,
  linkZalo,
  Tabs,
  TypeIndexIcon,
  // validEmail,
} from '../../../utils/constants'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes } from '../../../components/routes/AppRoutes'
import AsyncStorage from '@react-native-community/async-storage'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FastImage from 'react-native-fast-image'
import { keyPath } from '../screens/galery/GaleryScreen'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { ViewPictureComponent } from '../../../components/ViewPictureCompinent'
const { width, height } = Dimensions.get('window')

export const BottomNavigatorScreen = () => {
  const [activeTab, setActiveTab] = useState<any>(null)
  const [checkFlag, setCheckFlag] = useState<boolean>(false)
  const [showViewList, setShowViewList] = useState<boolean>(false)
  const [listPicture, setPictures] = useState<string[] | null>([''])
  const modalRef = useRef<FlexModalHandler | null>(null)
  const modalCameraRef = useRef<FlexModalHandler | null>(null)
  const lottieRef = useRef<LottieView | null>(null)
  const galeryRef = useRef<LottieView | null>(null)
  const videoRef = useRef<LottieView | null>(null)
  const { navigate }: any = useNavigation()

  const handleSetColor = (key: string) => {
    switch (key) {
      case Tabs[IndexIcon.ZALO].key:
        return VectorColor.cyan
      case Tabs[IndexIcon.MAIL].key:
        return VectorColor.grey85
      case Tabs[IndexIcon.FB].key:
        return VectorColor.grey85
      case Tabs[IndexIcon.YT].key:
        return VectorColor.grey85
      default:
        return VectorColor.black
    }
  }

  const handleIconFilter = (key: string, icon: string) => {
    if (key === Tabs[IndexIcon.ZALO].key) {
      return (
        <Icon size={24} color={VectorColor.black} name={icon} />
        // <FastImage source={require('../assets/zalo.png')} style={styles.icon} />
      )
    } else {
      return <Icon size={24} color={handleSetColor(key)} name={icon} />
    }
  }

  const renderIcon = (tab: any) => ({ isActive }: any) => {
    return handleIconFilter(tab?.key, tab?.icon)
  }

  const renderTab = ({ tab, isActive }: any) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab)}
      labelStyle={{
        color:
          tab.key === Tabs[IndexIcon.MAIL].key ||
          tab.key === Tabs[IndexIcon.FB].key ||
          tab.key === Tabs[IndexIcon.YT].key
            ? VectorColor.grey85
            : VectorColor.black,
      }}
    />
  )

  const handleOpen = useCallback(() => {
    if (modalRef.current) {
      setPictures([])
      modalRef.current.open({
        title: '',
        message: '',
      })
      setTimeout(() => {
        if (lottieRef.current) {
          lottieRef.current.play(0, 300)
        }
      })

      setTimeout(() => {
        if (galeryRef.current) {
          galeryRef.current.play(0, 300)
        }
      })

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play(0, 300)
        }
      })
    }
  }, [])

  const handleClose = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.dismiss()
    }
  }, [])

  const handleCameraOpen = useCallback(() => {
    if (modalCameraRef.current) {
      modalCameraRef.current.open({
        title: '',
        message: '',
      })
    }
  }, [])

  const handleCameraClose = useCallback(() => {
    if (modalCameraRef.current) {
      modalCameraRef.current.dismiss()
    }
  }, [])

  const onLink = React.useCallback((url: string) => {
    handleOpen()
  }, [])

  const handlePress = useCallback(async (activeTab: TabConfig) => {
    setActiveTab(activeTab)
    switch (activeTab?.key) {
      case TypeIndexIcon.ZALO:
        onLink(linkZalo)
        break
      case TypeIndexIcon.MAIL:
        // onLink(linkGmail)
        break
      case TypeIndexIcon.FB:
        // onLink(linkFB)
        break
      case TypeIndexIcon.YT:
        // onLink(linkYoutube)
        break
      default:
        // onLink(linkYoutube)
        break
    }
  }, [])

  useEffect(() => {
    AsyncStorage.getItem(KEY_STORAGE.KEY_IMAGE).then((response: any) => {
      if (!JSON.parse(response)) {
        AsyncStorage.setItem(KEY_STORAGE.KEY_IMAGE, JSON.stringify([]))
      }
    })
  }, [])

  const onCamera = async () => {
    handleClose()
    setTimeout(() => {
      handleCameraOpen()
    }, 1000)
  }

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

  const onVideo = useCallback(async () => {
    // var currentDate = moment().format('DD/MM/YYYY')
    // try {
    //   AsyncStorage.getItem(KEY_STORAGE.KEY_IMAGE, (_, result: any) => {
    //     if (result !== null) {
    //       console.log('Data Found', result)
    //       var newIds = Object.values(JSON.parse(result))?.concat({
    //         date: currentDate,
    //         uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    //       })
    //       AsyncStorage.setItem(KEY_STORAGE.KEY_IMAGE, JSON.stringify(newIds))
    //     } else {
    //     }
    //   })
    // } catch (error) {
    //   return error
    // }
    let response: any = await ImagePickerExpo.launchCameraAsync({
      mediaTypes: ImagePickerExpo.MediaTypeOptions.Videos,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    })

    if (!response?.canceled) {
      var currentDate = moment().format('DD/MM/YYYY')
      try {
        AsyncStorage.getItem(KEY_STORAGE.KEY_IMAGE, (_, result: any) => {
          if (result !== null) {
            var newIds = Object.values(JSON.parse(result))?.concat({
              date: currentDate,
              uri: response[0] ? response[0]?.uri : response?.uri,
            })
            AsyncStorage.setItem(KEY_STORAGE.KEY_IMAGE, JSON.stringify(newIds))
          } else {
            AsyncStorage.setItem(
              KEY_STORAGE.KEY_IMAGE,
              JSON.stringify(response),
            )
          }
        })
      } catch (error) {
        return error
      }
    }
  }, [])

  const onGalery = async () => {
    navigate(AppRoutes.GALARY)
    handleClose()
  }

  const [cameraPermission, setCameraPermission] = useState()

  useEffect(() => {
    ;(async () => {
      const cameraPermissionStatus: any = await Camera.requestCameraPermission()
      setCameraPermission(cameraPermissionStatus)
    })()
  }, [])

  const devices = useCameraDevices()
  const cameraDevice = devices.back
  const cameraRef = useRef<Camera>(null)

  const renderListImageView = () => {
    return (
      <>
        <EvilIcons
          style={{ position: 'absolute', zIndex: 2, right: 10, top: 10 }}
          name="close"
          color={VectorColor.black}
          size={scale(30)}
          onPress={() => {
            setShowViewList(false)
          }}
        />
        {/*
        <FlatList
          data={listPicture}
          style={{
            backgroundColor: 'black',
            paddingHorizontal: scale(2),
            paddingVertical: scale(10),
          }}
          renderItem={({ item }) => {
            return (
              <FastImage
                source={{ uri: validateName('file://', item) }}
                style={{
                  width: width / 3,
                  height: scale(130),
                  marginHorizontal: scale(2),
                  marginVertical: scale(3),
                }}
              />
            )
          }}
          horizontal={false}
          numColumns={3}
          keyExtractor={(_, index) => index.toString()}
        /> */}
        <ViewPictureComponent data={listPicture} isShow={true} />
      </>
    )
  }

  const renderDetectorContent = () => {
    if (cameraDevice && cameraPermission === 'authorized') {
      return (
        <>
          <View style={{ width, height }}>
            {showViewList ? (
              renderListImageView()
            ) : (
              <>
                <Camera
                  ref={cameraRef}
                  style={{ flex: 1 }}
                  device={cameraDevice}
                  isActive={true}
                  photo={true}
                />
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 29,
                    zIndex: 9,
                  }}
                  onPress={() => {
                    setShowViewList(true)
                  }}
                >
                  <FastImage
                    source={{
                      uri: validateName(
                        'file://',
                        listPicture?.[listPicture?.length - 1],
                      ),
                    }}
                    style={{ width: 60, height: 60, borderRadius: 5 }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    zIndex: 9,
                    bottom: 20,
                    alignSelf: 'center',
                  }}
                  onPress={async () => {
                    if (cameraRef?.current) {
                      setCheckFlag(true)
                      const response = await cameraRef.current.takePhoto({})
                      var currentDate = moment().format('DD/MM/YYYY')
                      try {
                        AsyncStorage.getItem(
                          KEY_STORAGE.KEY_IMAGE,
                          (_, result: any) => {
                            if (result !== null) {
                              var newIds = Object.values(
                                JSON.parse(result),
                              )?.concat({
                                date: currentDate,
                                uri: response?.path,
                              })
                              AsyncStorage.setItem(
                                KEY_STORAGE.KEY_IMAGE,
                                JSON.stringify(newIds),
                              )
                              setPictures(
                                (prev) => prev && [...prev, response?.path],
                              )
                            } else {
                              AsyncStorage.setItem(
                                KEY_STORAGE.KEY_IMAGE,
                                JSON.stringify(response),
                              )
                            }
                          },
                        )
                      } catch (error) {
                        return error
                      }
                    }
                  }}
                >
                  <Entypo
                    name="circle"
                    size={scale(60)}
                    color={VectorColor.white}
                  />
                </TouchableOpacity>
                {checkFlag && (
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      zIndex: 9,
                      bottom: 20,
                      right: 29,
                    }}
                    onPress={() => {
                      setCheckFlag(false)
                      handleCameraClose()
                    }}
                  >
                    <Feather
                      name="check"
                      color={VectorColor.white}
                      size={scale(34)}
                    />
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </>
      )
    }
    return <ActivityIndicator size="large" color="#1C6758" />
  }

  return (
    <>
      <BottomNavigation
        onTabPress={(activeTab) => handlePress(activeTab)}
        renderTab={renderTab}
        tabs={Tabs}
      />

      <FlexModal
        containerStyle={styles.containerModal}
        ref={modalCameraRef}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        modalStyle={{ padding: 0, margin: 0 }}
        onBackdropPress={handleClose}
      >
        {renderDetectorContent()}
      </FlexModal>

      <FlexModal
        containerStyle={styles.containerModal}
        ref={modalRef}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        modalStyle={{ padding: 0, margin: 0, justifyContent: 'flex-end' }}
        onBackdropPress={handleClose}
      >
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleClose}>
              <View style={styles.containerView} />
            </TouchableOpacity>
            <View style={styles.containerGroup}>
              <TouchableOpacity onPress={onCamera}>
                <View style={styles.containerLine}>
                  <LottieView
                    ref={lottieRef}
                    source={require('../assets/camera1.json')}
                    style={styles.picture}
                    loop={false}
                    autoPlay={false}
                  />
                  <Text style={styles.title}>Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onVideo}>
                <View style={styles.containerLine}>
                  <LottieView
                    ref={galeryRef}
                    source={require('../assets/galery.json')}
                    style={[styles.picture]}
                    loop={false}
                    autoPlay={false}
                  />
                  <Text style={styles.title}>Video</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onGalery}>
                <View style={styles.containerLine}>
                  <LottieView
                    ref={videoRef}
                    source={require('../assets/video.json')}
                    style={[styles.picture]}
                    loop={false}
                    autoPlay={false}
                  />
                  <Text style={styles.title}>Galery</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </>
      </FlexModal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  containerModal: {
    backgroundColor: VectorColor.transparent,
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
  },
  icon: {
    width: scale(30),
    height: scale(28),
  },
  picture: {
    width: scale(50),
    height: scale(50),
  },
  containerView: {
    backgroundColor: VectorColor.greyba,
    width: 80,
    height: 6,
    borderRadius: 10,
  },
  containerGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  containerLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: VectorColor.black,
  },
})
