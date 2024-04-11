import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Slider} from './features/body';
import {Header} from './features/header';
import {Pagination} from './features/footer/Pagination.tsx';

export const App = () => {
  return (
    <LinearGradient colors={['#6B73FF', '#000DFF']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header />
        <Slider />
        <Pagination />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
