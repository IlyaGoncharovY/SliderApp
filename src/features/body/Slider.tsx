import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {AwesomeComponent, CoolComponent, TryNowComponent} from './components';
import {useSliderEvent} from './hook/useSliderEvent.ts';

interface ISlider {
  setActiveIndex: (value: number) => void;
}

export const Slider: FC<ISlider> = ({setActiveIndex}) => {
  const {scrollViewRef, handleMomentumScrollEnd} =
    useSliderEvent(setActiveIndex);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      snapToAlignment={'center'}
      onScroll={handleMomentumScrollEnd}
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
