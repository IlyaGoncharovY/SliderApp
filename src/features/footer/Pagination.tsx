import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonTitles} from '../../common/data';
import {gStyles} from '../../common/style';

interface IPagination {
  activeIndex: number;
}

export const Pagination: FC<IPagination> = ({activeIndex}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dotContainer}>
        {ButtonTitles.map((_, index) => (
          <View
            key={index}
            style={[
              gStyles.gBackColor,
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.dot,
            ]}
          />
        ))}
      </View>
      <TouchableOpacity style={[gStyles.gBackColor, styles.button]}>
        <Text style={styles.buttonText}>{ButtonTitles[activeIndex]}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    gap: 10,
  },
  dotContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: 50,
    opacity: 0.3,
  },
  activeDot: {
    opacity: 1,
  },
  button: {
    width: 335,
    height: 44,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: 'rgba(5, 111, 221, 1)',
  },
});
