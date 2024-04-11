import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IPagination {
  activeIndex: number;
}

export const Pagination: FC<IPagination> = ({activeIndex}) => {

  let titleButton;
  switch (activeIndex) {
    case 0:
      titleButton = 'Cool!';
      break;
    case 1:
      titleButton = 'Awesome!';
      break;
    case 2:
      titleButton = 'Try now!';
      break;
    default:
      titleButton = 'Cool!';
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.dotContainer}>
        <View style={activeIndex === 0 ? styles.activeDot : styles.dot} />
        <View style={activeIndex === 1 ? styles.activeDot : styles.dot} />
        <View style={activeIndex === 2 ? styles.activeDot : styles.dot} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{titleButton}</Text>
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
    backgroundColor: '#FFFFFF',
    opacity: 0.3,
  },
  activeDot: {
    width: 11,
    height: 11,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: 335,
    height: 44,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 22,
    color: 'rgba(5, 111, 221, 1)',
  },
});
