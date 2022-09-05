import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';

import Store from './Redux/Store';
import MainStack from './Stacks/MainStack';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <MainStack />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(212, 212, 212, 212)',
  },
});

export default App;
