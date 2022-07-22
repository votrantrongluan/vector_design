import React, { useRef, useState } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import Carousel, { Pagination } from '../../../components/snapCarousel'
import SliderEntry from '../../../components/snapCarousel/carousel/SliderEntry'
const { width: viewportWidth } = Dimensions.get('window')

function wp(percentage: any) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}
const SLIDER_1_FIRST_ITEM = 1
const slideWidth = wp(75)
const itemHorizontalMargin = wp(2)
export const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
]

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2
export const HomeScreen = () => {
  const _slider1Ref = useRef<any>(null)
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState<number>(0)
  const _renderItemWithParallax = ({ item, index }: any, parallaxProps: any) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    )
  }

    const _renderItem = ({ item, index }: any) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
}

  return (
    <View style={styles.container}>
      {/* <Carousel
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
        autoplayInterval={3000}
        onSnapToItem={setSlider1ActiveSlide}
      />
      <Pagination
        dotsLength={ENTRIES1.length}
        activeDotIndex={slider1ActiveSlide}
        containerStyle={styles.paginationContainer}
        dotColor={'rgba(255, 255, 255, 0.92)'}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'black'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={_slider1Ref}
      /> */}
        <Carousel
                  data={ENTRIES1}
                  renderItem={_renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
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
})
