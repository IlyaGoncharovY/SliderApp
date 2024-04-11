import {StyleSheet, Text, View} from 'react-native';
import {AwesomeArrType} from '../../../../../common/data';
import {FC} from 'react';
import {gStyles} from '../../../../../common/style';

interface IAwesomeItem {
  awesomeEl: AwesomeArrType;
}
export const AwesomeItem: FC<IAwesomeItem> = ({awesomeEl}) => {
  return (
    <View style={styles.container}>
      <Text style={[gStyles.gColor, styles.title]}>{awesomeEl.title}</Text>
      <Text style={[gStyles.gColor, styles.description]}>
        {awesomeEl.description}
      </Text>
      <Text style={[gStyles.gColor, styles.description]}>
        {awesomeEl.anotherDescription}
      </Text>
      <Text style={[gStyles.gColor, styles.otherText]}>and others...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  title: {
    opacity: 0.7,
    fontSize: 34,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  otherText: {
    fontSize: 24,
  },
});
