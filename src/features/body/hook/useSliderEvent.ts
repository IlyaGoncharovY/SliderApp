import {useRef} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';

/**
 * custom hook for check event. and ref
 * @param setActiveIndex
 * @return setActiveIndex
 * @return setActiveIndex
 * @return setActiveIndex
 */

export const useSliderEvent = (setActiveIndex: (value: number) => void) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(
      contentOffsetX / event.nativeEvent.layoutMeasurement.width,
    );
    setActiveIndex(index);
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(
      contentOffsetX / event.nativeEvent.layoutMeasurement.width,
    );
    setActiveIndex(index);
  };

  return {
    scrollViewRef,
    handleScroll,
    handleMomentumScrollEnd,
  };
};
