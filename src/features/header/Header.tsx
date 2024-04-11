import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const Header = () => {
  return (
    <View>
      <Image
        source={require('../../common/assects/logo.png')}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 108,
    height: 35,
    margin: 20,
  },
});
