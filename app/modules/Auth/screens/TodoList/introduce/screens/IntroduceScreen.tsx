import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { VectorColor } from '../../../../../../components/color/VectorColor'
import { AppRoutes } from '../../../../../../components/routes/AppRoutes'
import { scale } from '../../../../../../components/ScalingUtils'
const { width, height } = Dimensions.get('window')

const bgImage = require('../../../../assets/bg.jpg')

export default (props: any) => {
  const { navigate }: any = useNavigation()

  const renderSpace = () => {
    return (
      <View
        style={{
          height: 450,
        }}
      ></View>
    )
  }

  const renderButton = () => {
    const handleEvents = useCallback(() => {
      navigate(AppRoutes.SIGNIN)
    }, [])

    return (
      <TouchableOpacity onPress={handleEvents} style={styles.button}>
        <Text style={styles.titleStart}>{'Get Started'}</Text>
      </TouchableOpacity>
    )
  }

  const renderBody = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/coredxor/images/main/crot.png',
          }}
          resizeMode={'stretch'}
          style={{
            width: 70,
            height: 70,
          }}
        />
        <Text style={styles.titleTop}>{'Welcome'}</Text>
        <Text style={styles.title}>
          {'Ger your groceries in as fast as one hour'}
        </Text>
        {renderButton()}
      </View>
    )
  }

  return (
    // <ImageBackground
    //     source={bgImage}
    //     resizeMode={FastImage.resizeMode.stretch}
    //     style={{
    //       flex: 1,
    //     }}
    //   >
    //     {renderSpace()}
    //     {renderBody()}
    //   </ImageBackground>
    <>
      <View style={styles.container} />
      <View style={styles.containerGroup}>
        {renderSpace()}
        {renderBody()}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: VectorColor.grey85,
    position: 'absolute',
    width,
    height,
  },
  titleTop: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    margin: 20,
  },
  titleStart: {
    color: '#FFF9FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: '#FCFCFC',
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    height: 65,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53B175',
    borderRadius: 20,
    margin: 16,
  },
  containerGroup: {
    position: 'absolute',
    zIndex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    marginTop: scale(-40),
  },
})
