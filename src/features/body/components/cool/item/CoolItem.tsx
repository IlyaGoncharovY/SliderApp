import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CoolArrType} from '../../../../../common/data';
import {gStyles} from '../../../../../common/style';

interface ICoolItem {
  coolEl: CoolArrType;
}

export const CoolItem: FC<ICoolItem> = ({coolEl}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[gStyles.gColor, styles.title]}>{coolEl.title}</Text>
      </View>
      <View>
        <Text style={[gStyles.gColor, styles.description]}>
          {coolEl.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  title: {
    opacity: 0.7,
    fontSize: 44,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 44,
    fontWeight: 'bold',
  },
});
