import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {AwesomeItem, CoolItem, TryNowItem} from './components';

export const Slider = () => {
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      snapToAlignment={'center'}>
      <CoolItem />
      <AwesomeItem />
      <TryNowItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
