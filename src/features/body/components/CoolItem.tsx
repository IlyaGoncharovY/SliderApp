import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const CoolItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>You have</Text>
          <Text style={styles.title}>millions of questions...</Text>
        </View>
        <View>
          <Text style={styles.title}>We have</Text>
          <Text style={styles.title}>answers in the stars!</Text>
        </View>
      </View>
      <Button title={'CoolItem'} />
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
