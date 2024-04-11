import React from 'react';
import {CoolArr, CoolArrType} from '../../../../common/data';
import {CoolItem} from './item/CoolItem.tsx';
import {GenericComponent} from '../../../../common/components';

export const CoolComponent = () => {
  const renderItem = ({item}: {item: CoolArrType}) => (
    <CoolItem coolEl={item} />
  );

  return <GenericComponent data={CoolArr} renderItemComponent={renderItem} />;
};
