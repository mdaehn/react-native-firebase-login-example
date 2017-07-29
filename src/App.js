import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, View } from 'native-base';
import MainStackRouter from './routers/MainStackRouter';
import ProgressBar from './components/loaders/ProgressBar';

import theme from './themes/base-theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal1: {
    height: 300
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainStackRouter />;
  }
}

export default App;
