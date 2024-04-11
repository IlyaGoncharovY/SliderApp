import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Pagination} from './pagination/Pagination.tsx';

export const FooterContainer = () => {
  return (
    <View style={styles.container}>
      <Text>FooterContainer</Text>
      <Pagination />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
});
