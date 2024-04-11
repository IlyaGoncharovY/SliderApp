import React from 'react';
import {AwesomeArr, AwesomeArrType} from '../../../../common/data';
import {AwesomeItem} from './item/AwesomeItem.tsx';
import {GenericComponent} from '../../../../common/components';

export const AwesomeComponent = () => {
  const renderItem = ({item}: {item: AwesomeArrType}) => (
    <AwesomeItem awesomeEl={item} />
  );

  return (
    <GenericComponent data={AwesomeArr} renderItemComponent={renderItem} />
  );
};
