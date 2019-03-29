import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class HomeHeaderLeft extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>Gram</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  text: {
    fontSize: 28,
    color: '#c2185b',
    fontFamily: 'Palatino-BoldItalic'
  }
})

export default HomeHeaderLeft;
