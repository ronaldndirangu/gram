import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/router';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
