import React, { useCallback, useRef, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BottomNavigation, {
  FullTab,
  TabConfig,
} from 'react-native-material-bottom-navigation'
import ImageCrop from 'react-native-image-crop-picker'
import LottieView from 'lottie-react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { VectorColor } from '../../../components/color/VectorColor'
import * as ImagePicker from 'expo-image-picker'
import {
  FlexModal,
  FlexModalHandler,
} from '../../../components/modal/FlexModal'
import { scale } from '../../../components/ScalingUtils'
import {
  IndexIcon,
  // linkFB,
  // linkGmail,
  // linkYoutube,
  linkZalo,
  Tabs,
  TypeIndexIcon,
  // validEmail,
} from '../../../utils/constants'

export const BottomNavigatorScreen = () => {
  const [activeTab, setActiveTab] = useState<any>(null)
  const modalRef = useRef<FlexModalHandler | null>(null)
  const lottieRef = useRef<LottieView | null>(null)
  const galeryRef = useRef<LottieView | null>(null)

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
    }
  }, [])

  const handleClose = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.dismiss()
    }
  }, [])

  const onLink = React.useCallback(async (url: string) => {
    handleOpen()
    // const supported = await Linking.canOpenURL(url)
    // if (supported) {
    //   await Linking.openURL(`${validEmail.test(url) ? 'mailto:' : url}`)
    // } else {
    //   Alert.alert(`Don't know how to open this URL: ${url}`)
    // }
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

  const onCamera = useCallback(async () => {
    let result: any = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result?.canceled) {
      // setImage(result.assets[0].uri);
      console.log(
        '🚀 ~ file: BottomNavigatorScreen.tsx:184 ~ onGalery ~ result:',
        result,
      )
    }
  }, [])

  const onVideo = useCallback(async () => {
    let result: any = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result?.canceled) {
      // setImage(result.assets[0].uri);
      console.log(
        '🚀 ~ file: BottomNavigatorScreen.tsx:184 ~ onGalery ~ result:',
        result,
      )
    }
  }, [])

  return (
    <>
      <BottomNavigation
        onTabPress={(activeTab) => handlePress(activeTab)}
        renderTab={renderTab}
        tabs={Tabs}
      />

      <FlexModal
        containerStyle={styles.containerModal}
        ref={modalRef}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        modalStyle={{ padding: 0, margin: 0 }}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={handleClose}>
            <View style={styles.containerView} />
          </TouchableOpacity>
          <View style={styles.containerGroup}>
            <TouchableOpacity onPress={onCamera}>
              <View style={styles.containerLine}>
                <LottieView
                  ref={lottieRef}
                  source={require('../assets/camera.json')}
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
                  style={[
                    styles.picture,
                  ]}
                  loop={false}
                  autoPlay={false}
                />
                <Text style={styles.title}>Video</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </FlexModal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '14%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  containerModal: {
    flex: 1,
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
    width: '80%',
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
