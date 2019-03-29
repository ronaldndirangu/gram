import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Stories from '../components/Stories';
import PostsList from '../components/PostsList';

class Home extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Stories />
        <View style={styles.posts}>
          <PostsList />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  posts: {
    flex: 1,
    paddingVertical: 10
  }
});

export default Home;
