import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Post from '../components/Post';

class PostsList extends Component {
  _keyExtractor = item => item.id.toString();

  render() {
    const imageUris = [
      {
        id: 1,
        username: 'jon_snow',
        uri: 'http://lorempixel.com/output/sports-q-c-640-480-5.jpg'
      },
      {
        id: 2,
        username: 'kal_drogo',
        uri: 'http://lorempixel.com/output/sports-q-c-640-480-1.jpg'
      },
      {
        id: 3,
        username: 'khalesi',
        uri: 'http://lorempixel.com/output/sports-q-c-640-480-6.jpg'
      }
    ];

    return (
      <FlatList
        data={imageUris}
        renderItem={({ item }) => (
          <Post username={item.username} imageUri={item.uri} />
        )}
        keyExtractor={item => this._keyExtractor(item)}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

export default PostsList;