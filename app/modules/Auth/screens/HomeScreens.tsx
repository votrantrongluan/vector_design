import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  NativeModules,
  NativeEventEmitter,
} from 'react-native'
import { BrowserView } from '../../../components/browser'
import { VectorColor } from '../../../components/color/VectorColor'
import { scale } from '../../../components/ScalingUtils'
import Carousel, { Pagination } from '../../../components/snapCarousel'
import SliderEntry from '../../../components/snapCarousel/carousel/SliderEntry'
import { ENTRIES1, TranSlationLanguage } from '../../../utils/constants'
import { DetailScreens } from './DetailScreens'
import { ServicesScreen } from './services-screens/ServicesScreen'
const { width: viewportWidth } = Dimensions.get('window')
const { CustomMethods, QRScannerModule } = NativeModules
const qrScannerEmitter = new NativeEventEmitter(QRScannerModule)

function wp(percentage: any) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}
const SLIDER_1_FIRST_ITEM = 1
const slideWidth = wp(75)
const itemHorizontalMargin = wp(2)

export interface ItemProps {
  id: number
  illustration: string
}

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2
export const HomeScreen = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const _slider1Ref = useRef<any>(null)
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState<number>(0)
  const [item, setItem] = useState<ItemProps[]>([])

  // const handleEvents = useCallback((value: any) => {
  //   setVisible(true)
  //   setItem(value?.item)
  // }, [])

  const _renderItemWithParallax = (
    { item, index }: any,
    parallaxProps: any,
  ) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
        // _handleClick={() => handleEvents(item)}
      />
    )
  }

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])

  const onCallIOSNativeMethod = () => {
    // Connected Module From IOS
    // console.log('calling')
    // CustomMethods?.MyMethod('Testing from RN to IOS')

    // QR Scan
    QRScannerModule.startScanning()
  }

  useEffect(() => {
    // const YourModuleEvents = new NativeEventEmitter(
    //   NativeModules.RNEventEmitter,
    // )

    // const eventListener = YourModuleEvents.addListener('onReady', (string) => {
    //   console.log('🚀 ~ eventListener ~ string:', string)
    // })
    const subscription = qrScannerEmitter.addListener(
      'onQRCodeScanned',
      (data) => {
        console.log({ qqqqq: data.qrCode }) // Handle the scanned QR code
      },
    )

    // Don't forget to unsubscribe when the component unmounts
    subscription.remove()
  }, [])

  return (
    <BrowserView style={{ flex: 1 }} onPress={(event) => undefined} />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{TranSlationLanguage.Products_Title}</Text>
      <View style={{ height: scale(300) }}>
        <Carousel
          ref={_slider1Ref}
          data={ENTRIES1}
          renderItem={_renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={4000}
          onSnapToItem={setSlider1ActiveSlide}
          removeClippedSubviews={false}
        />
      </View>
      <Pagination
        dotsLength={ENTRIES1.length}
        activeDotIndex={slider1ActiveSlide}
        containerStyle={styles.paginationContainer}
        dotColor={VectorColor.blue}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'black'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={_slider1Ref}
      />
      <ServicesScreen />
      <DetailScreens visible={visible} onClose={onClose} item={item} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: VectorColor.white,
  },
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
    marginTop: scale(40),
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  exampleContainerDark: {
    backgroundColor: VectorColor.black,
  },
  title: {
    fontSize: scale(22),
    fontWeight: 'bold',
    color: VectorColor.black,
    marginTop: scale(20),
    marginLeft: scale(10),
  },
})
