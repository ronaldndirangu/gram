import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostControls from './PostControls';

class Post extends Component {
  render() {
    const { imageUri, username } = this.props
    console.log(this.props);
    return (
      <View style={styles.container}>
        <PostHeader username={username} />
        <PostBody imageUri={imageUri} />
        <PostControls />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  }
})

export default Post;
