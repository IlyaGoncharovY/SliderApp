import {StyleSheet, Text, View} from 'react-native';
import {TryNowArrType} from '../../../../../common/data';
import {FC} from 'react';

interface ITryNowItem {
  tryNowEl: TryNowArrType;
  isFirst: boolean;
}

export const TryNowItem: FC<ITryNowItem> = ({tryNowEl, isFirst}) => {
  return (
    <View style={styles.container}>
      <Text style={isFirst ? styles.firstEl : styles.title}>
        {tryNowEl.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  firstEl: {
    color: '#ffffff',
    opacity: 0.7,
    fontSize: 36,
    fontWeight: 'bold',
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
