import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class HomeHeaderRight extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Icon name="inbox" type="feather" size={28} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20
  }
})

export default HomeHeaderRight;
