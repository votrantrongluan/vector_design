import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useRef, useState } from 'react'
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { VectorColor } from '../../../components/color/VectorColor'
import {
  FlexModal,
  FlexModalHandler,
} from '../../../components/modal/FlexModal'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { scale } from '../../../components/ScalingUtils'
import { ItemProps, itemWidth, sliderWidth } from './HomeScreens'
// import SliderEntry from '../../../components/snapCarousel/carousel/SliderEntry'
import Carousel from '../../../components/snapCarousel'
import FastImage from 'react-native-fast-image'
// @ts-ignore
import ImageZoom from 'react-native-image-pan-zoom'
const { width } = Dimensions.get('window')
interface PropsIems {
  itemPage: any[]
}

interface Props {
  onClose?: () => void
  visible: boolean
  item: ItemProps[]
}

const ItemHomePage = ({ itemPage }: PropsIems) => {
  const [listPictures, setList] = useState<any[]>([])
  const _slider1Ref = useRef<any>(null)

  useFocusEffect(
    React.useCallback(() => {
      setList(itemPage)
    }, [itemPage]),
  )

  const _renderItem = ({ item, index }: any, parallaxProps: any) => {
    return (
      // <SliderEntry
      //   data={item}
      //   even={(index + 1) % 2 === 0}
      //   parallax={true}
      //   parallaxProps={parallaxProps}
      // />
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={scale(300)}
        imageHeight={scale(400)}
      >
        <FastImage
          source={{ uri: item?.illustration }}
          style={{ width: scale(300), height: scale(400) }}
        />
      </ImageZoom>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        ref={_slider1Ref}
        data={listPictures}
        renderItem={_renderItem}
        sliderWidth={
          Platform.OS === 'ios' ? sliderWidth : width * (200 / width)
        }
        itemWidth={Platform.OS === 'ios' ? itemWidth * 2 : itemWidth}
        hasParallaxImages={true}
        firstItem={1}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        activeSlideAlignment={'start'}
        activeAnimationType={'spring'}
        loopClonesPerSide={2}
        autoplay={false}
        autoplayDelay={500}
        autoplayInterval={4000}
        layout={'stack'}
        layoutCardOffset={`18`}
      />
    </View>
  )
}

export const DetailScreens = ({ onClose, visible, item }: Props) => {
  const modalRef = useRef<FlexModalHandler | null>(null)
  const [dataPageList, setPageList] = useState<any[]>([])

  useFocusEffect(
    React.useCallback(() => {
      if (visible) {
        handleOpen()
      }
    }, [visible]),
  )

  useFocusEffect(
    React.useCallback(() => {
      if (item) {
        setPageList(item)
      }
    }, [item]),
  )

  const handleOpen = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.open({
        title: '',
        message: '',
      })
    }
  }, [])

  const handleClose = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.dismiss()
    }
    if (onClose) {
      onClose()
    }
  }, [])

  return (
    <FlexModal
      containerStyle={{
        flex: 1,
        backgroundColor: VectorColor.black,
        justifyContent: 'center',
        margin: 0,
        padding: 0,
      }}
      ref={modalRef}
      animationIn="zoomIn"
      animationOut="zoomOut"
      modalStyle={{ padding: 0, margin: 0 }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.icon} onPress={handleClose}>
          <AntDesign
            size={scale(24)}
            key="close"
            name="close"
            color={VectorColor.white}
          />
        </TouchableOpacity>
        <ItemHomePage itemPage={dataPageList} />
      </View>
    </FlexModal>
  )
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    zIndex: 1,
    top: scale(60),
    right: scale(12),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    alignItems: 'center',
  },
})
