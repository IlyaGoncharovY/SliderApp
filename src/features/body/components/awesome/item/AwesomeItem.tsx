import {StyleSheet, Text, View} from 'react-native';
import {AwesomeArrType} from '../../../../../common/data';
import {FC} from 'react';

interface IAwesomeItem {
  awesomeEl: AwesomeArrType;
}
export const AwesomeItem: FC<IAwesomeItem> = ({awesomeEl}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{awesomeEl.title}</Text>
      <Text style={styles.description}>{awesomeEl.description}</Text>
      <Text style={styles.description}>{awesomeEl.anotherDescription}</Text>
      <Text style={styles.otherText}>and others...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  title: {
    color: '#ffffff',
    opacity: 0.7,
    fontSize: 34,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  otherText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});
