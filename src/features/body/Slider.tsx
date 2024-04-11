import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {AwesomeComponent, CoolComponent, TryNowComponent} from './components';

export const Slider = () => {
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      snapToAlignment={'center'}>
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
