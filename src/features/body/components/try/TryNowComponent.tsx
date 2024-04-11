import {TryNowArr, TryNowArrType} from '../../../../common/data';
import {TryNowItem} from './item/TryNowItem.tsx';
import {GenericComponent} from '../../../../common/components';

export const TryNowComponent = () => {
  const renderItem = ({item, index}: {item: TryNowArrType; index?: number}) => (
    <TryNowItem tryNowEl={item} isFirst={index === 0} />
  );

  return <GenericComponent data={TryNowArr} renderItemComponent={renderItem} />;
};
