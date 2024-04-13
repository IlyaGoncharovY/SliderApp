import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Slider} from './features/body';
import {Header} from './features/header';
import {Pagination} from './features/footer';

export const App = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <LinearGradient colors={['#6B73FF', '#000DFF']} style={styles.gradient}>
        <Header />
        <Slider setActiveIndex={setActiveIndex} />
        <Pagination activeIndex={activeIndex} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
