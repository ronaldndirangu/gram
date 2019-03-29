import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Story from './Story';

class Stories extends Component {
  
  _keyExtractor = item => (item.id).toString();

  render() {
    const imageUris = [
      { id: 1, uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { id: 2, uri: 'https://randomuser.me/api/portraits/women/68.jpg' },
      { id: 3, uri: 'https://randomuser.me/api/portraits/men/40.jpg' },
      { id: 4, uri: 'https://randomuser.me/api/portraits/men/72.jpg' },
      { id: 5, uri: 'https://randomuser.me/api/portraits/men/22.jpg' },
      { id: 6, uri: 'https://randomuser.me/api/portraits/women/13.jpg' },
      { id: 7, uri: 'https://randomuser.me/api/portraits/women/10.jpg' },
      { id: 8, uri: 'https://randomuser.me/api/portraits/men/10.jpg' },
      { id: 9, uri: 'https://randomuser.me/api/portraits/women/50.jpg' },
      { id: 10, uri: 'https://randomuser.me/api/portraits/men/58.jpg' },
    ];


    return (
      <View style={styles.container}>
        <FlatList
          data={imageUris}
          renderItem={({item}) => <Story imageUri={item.uri} />}
          keyExtractor={(item) => this._keyExtractor(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 60,
    paddingLeft: 10,
    paddingTop: 3,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomWidth: .3,
    borderBottomColor: '#CCC'
  }
});

export default Stories;
