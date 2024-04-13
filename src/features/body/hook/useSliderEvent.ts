import {useRef} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';

/**
 * custom hook for check event. and ref
 * @param setActiveIndex - (value: number) => void
 * @return scrollViewRef : MutableRefObject<ScrollView>
 * @return handleMomentumScrollEnd : (event: NativeSyntheticEvent<NativeScrollEvent>) => void
 */

export const useSliderEvent = (setActiveIndex: (value: number) => void) => {
  const scrollViewRef = useRef<ScrollView>(null);

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
    handleMomentumScrollEnd,
  };
};
