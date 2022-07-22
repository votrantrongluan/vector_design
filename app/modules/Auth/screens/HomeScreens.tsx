import React, { useCallback, useRef, useState } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import { VectorColor } from '../../../components/color/VectorColor'
import { scale } from '../../../components/ScalingUtils'
import Carousel, { Pagination } from '../../../components/snapCarousel'
import SliderEntry from '../../../components/snapCarousel/carousel/SliderEntry'
import { ENTRIES1 } from '../../../utils/constants'
import { DetailScreens } from './DetailScreens'
const { width: viewportWidth } = Dimensions.get('window')

function wp(percentage: any) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}
const SLIDER_1_FIRST_ITEM = 1
const slideWidth = wp(75)
const itemHorizontalMargin = wp(2)

export interface ItemProps {
  id: number, illustration: string
}

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2
export const HomeScreen = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const _slider1Ref = useRef<any>(null)
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState<number>(0)
  const [item, setItem] = useState<ItemProps[]>([])

  const handleEvents = useCallback((value: any) => {
    setVisible(true)
    setItem(value?.item)
  }, [])

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
        _handleClick={() => handleEvents(item)}
      />
    )
  }

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ height: scale(350) }}>
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
      <DetailScreens visible={visible} onClose={onClose} item={item} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: VectorColor.blueLight,
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
})
