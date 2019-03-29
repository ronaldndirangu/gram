import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class PostControls extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.controlsLeft}>
          <Icon name="heart" type="feather" size={25} />
          <Icon name="message-circle" type="feather" size={25} />
          <Icon name="send" type="feather" size={25} />
        </View>
        <View style={styles.controlsRight}>
          <Icon name="bookmark" type="feather" size={25} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  controlsLeft: {
    flex: 1,
    flexDirection: 'row',
    flexBasis: '26%',
    justifyContent: 'space-between',
  },
  controlsRight: {
    flex: 1,
    flexBasis: '74%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default PostControls;
