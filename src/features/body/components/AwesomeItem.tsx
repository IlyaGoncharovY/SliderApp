import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const AwesomeItem = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Love</Text>
            <Text style={styles.title}>When will I meet my soulmate?</Text>
            <Text style={styles.title}>When will I get married?</Text>
            <Text style={styles.title}>and others...</Text>
          </View>
          <View>
            <Text style={styles.title}>Self</Text>
            <Text style={styles.title}>What I am here to learn in life?</Text>
            <Text style={styles.title}>Am I on the right path?</Text>
            <Text style={styles.title}>and others...</Text>
          </View>
          <View>
            <Text style={styles.title}>Daily life </Text>
            <Text style={styles.title}>What is going to happen next?</Text>
            <Text style={styles.title}>Any insight for today?</Text>
            <Text style={styles.title}>and others...</Text>
          </View>
        </View>
        <Button title={'CoolItem'} />
      </View>
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
