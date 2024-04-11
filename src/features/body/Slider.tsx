import React, {FC, useRef} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {AwesomeComponent, CoolComponent, TryNowComponent} from './components';

interface ISlider {
  setActiveIndex: (value: number) => void;
}

export const Slider: FC<ISlider> = ({setActiveIndex}) => {
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

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      snapToAlignment={'center'}
      onScroll={handleScroll}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      scrollEventThrottle={200}>
      <CoolComponent />
      <AwesomeComponent />
      <TryNowComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
