import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {DataSetType} from '../../../common/data';

interface ISliderItem {
  sliderItem: DataSetType;
}

export const SliderItem: FC<ISliderItem> = ({sliderItem}) => {
  return (
    <View>
      <Text>{sliderItem.title}</Text>
      <Button title={sliderItem.buttonText} />
    </View>
  );
};
