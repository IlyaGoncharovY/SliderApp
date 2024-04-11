import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {AwesomeArr, AwesomeArrType} from '../../../../common/data';
import {AwesomeItem} from './item/AwesomeItem.tsx';

const {width, height} = Dimensions.get('screen');

export const AwesomeComponent = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList
            data={AwesomeArr}
            renderItem={({item}) => <AwesomeItem awesomeEl={item} />}
            keyExtractor={(item: AwesomeArrType) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    // alignItems: 'center',
    paddingHorizontal: 30,
  },
  content: {},
  title: {
    fontSize: 44,
    fontWeight: 'bold',
  },
});
