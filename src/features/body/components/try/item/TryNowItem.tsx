import {StyleSheet, Text, View} from 'react-native';
import {TryNowArrType} from '../../../../../common/data';
import {FC} from 'react';
import {gStyles} from '../../../../../common/style';

interface ITryNowItem {
  tryNowEl: TryNowArrType;
  isFirst: boolean;
}

export const TryNowItem: FC<ITryNowItem> = ({tryNowEl, isFirst}) => {
  return (
    <View style={styles.container}>
      <Text style={[gStyles.gColor, isFirst ? styles.firstEl : styles.title]}>
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
    opacity: 0.7,
    fontSize: 36,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
