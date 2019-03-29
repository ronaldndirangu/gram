import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class ViewPost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ViewPost</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ViewPost;
