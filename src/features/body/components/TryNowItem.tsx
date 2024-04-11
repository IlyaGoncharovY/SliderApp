import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const TryNowItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>How it works</Text>
        <Text style={styles.title}> Share birth details</Text>
        <Text style={styles.title}> Ask a question </Text>
        <Text style={styles.title}>An astrologer will make a prediction </Text>
        <Text style={styles.title}>Get your answer</Text>
        <Text style={styles.title}>TryNowItem</Text>
      </View>
      <Button title={'TryNowItem'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  content: {},
  title: {
    fontSize: 44,
    fontWeight: 'bold',
  },
});
