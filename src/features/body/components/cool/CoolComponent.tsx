import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {CoolArr, CoolArrType} from '../../../../common/data';
import {CoolItem} from './item/CoolItem.tsx';

const {width, height} = Dimensions.get('screen');

export const CoolComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={CoolArr}
          renderItem={({item}) => <CoolItem coolEl={item} />}
          keyExtractor={(item: CoolArrType) => item.id}
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
  content: {
    flex: 0.9,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
  },
});
