import React from 'react';
import {FlatList, View} from 'react-native';
import {DataSet, DataSetType} from '../../common/data';
import {SliderItem} from './item/SliderItem.tsx';

export const Slider = () => {
  return (
    <View>
      <FlatList
        data={DataSet}
        renderItem={({item}) => <SliderItem sliderItem={item} />}
        keyExtractor={(item: DataSetType) => item.id}
      />
    </View>
  );
};
