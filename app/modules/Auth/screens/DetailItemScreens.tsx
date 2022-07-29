import { useFocusEffect, useRoute } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import Swiper from 'react-native-swiper'
import { scale } from '../../../components/ScalingUtils'
import { InfoDetailChoose } from './services-screens/InfoDetailChoose'
const { width } = Dimensions.get('window')

const Slide = (props: any) => {
  return (
    <View style={styles.slide}>
      <FastImage
        onLoad={() => {
          props.loadHandle(props.i)
        }}
        style={styles.image}
        source={{ uri: props.uri }}
      />
    </View>
  )
}

export const DetailItemScreens = () => {
  const [loadQueue] = useState<any>([0, 0, 0, 0])
  const route = useRoute()
  const { data } = route?.params as any
  const [imageList, setImageList] = useState<any[]>([])

  useFocusEffect(
    React.useCallback(() => {
      setImageList(data?.imgList)
    }, []),
  )

  const loadHandle = useCallback((i: number) => { }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons loop={false}>
          {imageList?.map((item, i) => (
            <Slide
              loadHandle={loadHandle}
              uri={item}
              i={i}
              key={i}
              loaded={loadQueue[i]}
            />
          ))}
        </Swiper>
      </View>
      <InfoDetailChoose />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { height: scale(300), width },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent',
  },
})
