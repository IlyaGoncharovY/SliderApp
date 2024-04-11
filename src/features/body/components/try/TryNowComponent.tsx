import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {TryNowArr, TryNowArrType} from '../../../../common/data';
import {TryNowItem} from './item/TryNowItem.tsx';

const {width, height} = Dimensions.get('screen');

export const TryNowComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={TryNowArr}
          renderItem={({item, index}) => (
            <TryNowItem tryNowEl={item} isFirst={index === 0} />
          )}
          keyExtractor={(item: TryNowArrType) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    paddingHorizontal: 30,
  },
  content: {},
  title: {
    fontSize: 44,
    fontWeight: 'bold',
  },
});
