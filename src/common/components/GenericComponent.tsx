import {Dimensions, FlatList, StyleSheet, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

interface IGenericComponent<T> {
  data: T[];
  renderItemComponent: ({
    item,
    index,
  }: {
    item: T;
    index?: number;
  }) => JSX.Element;
}

/**
 * common component for render lists scrolling
 * @param data
 * @param renderItemComponent
 * @constructor
 */

export const GenericComponent = <T extends {id: string}>({
  data,
  renderItemComponent,
}: IGenericComponent<T>) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => renderItemComponent({item, index})}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    paddingHorizontal: 30,
  },
});
