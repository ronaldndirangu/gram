import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native';

class PostBody extends Component {
  render() {
    const { imageUri } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: 350}}
          source={{ uri: `${imageUri}` }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PostBody;
