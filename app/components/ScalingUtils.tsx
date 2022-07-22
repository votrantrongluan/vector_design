import { Dimensions, ViewStyle } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
export const guidelineBaseWidth = 414;
export const guidelineBaseHeight = 896;

export function scale(size: number): number {
  return (shortDimension / guidelineBaseWidth) * size;
}
export function verticalScale(size: number): number {
  return (longDimension / guidelineBaseHeight) * size;
}
export function moderateScale(size: number, factor: number = 0.5): number {
  return size + (scale(size) - size) * factor;
}
export function moderateVerticalScale(size: number, factor: number = 0.5): number {
  return size + (verticalScale(size) - size) * factor;
}

export const AutoScaleStyle: ViewStyle = { left: guidelineBaseWidth / 2 * (scale(1) - 1), top: guidelineBaseWidth / 2 * (scale(1) - 1), width: guidelineBaseWidth, transform: [{ scaleX: scale(1) }, { scaleY: scale(1) }] }
export const AutoScaleStyleFitRecruitmentHome: ViewStyle = { top: width * (scale(1) - 1), width: guidelineBaseWidth, transform: [{ scaleX: scale(1) }, { scaleY: scale(1) }], marginBottom: guidelineBaseHeight * (scale(1) - 1) }
export const AutoScaleStyleFitTopLeftOffset: ViewStyle = { left: guidelineBaseWidth / 2 * (scale(1) - 1), top: guidelineBaseHeight / 2 * (scale(1) - 1), width: guidelineBaseWidth, transform: [{ scaleX: scale(1) }, { scaleY: scale(1) }], marginBottom: guidelineBaseHeight * (scale(1) - 1) }