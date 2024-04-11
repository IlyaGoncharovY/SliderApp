import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Slider} from './features/body';
import {Header} from './features/header';
import {Pagination} from './features/footer';

export const App = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <LinearGradient colors={['#6B73FF', '#000DFF']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header />
        <Slider setActiveIndex={setActiveIndex} />
      </SafeAreaView>
      <Pagination activeIndex={activeIndex} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
