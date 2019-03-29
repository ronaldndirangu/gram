import React, { PureComponent } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

class PostHeader extends PureComponent {
  render() {
    const { username } = this.props;
    
    return (
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Avatar
            size="small"
            rounded
            source={{
              uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            />
            <Text style={styles.username}>{username}</Text>
        </View>
        <TouchableWithoutFeedback style={styles.containerRight}>
          <Icon name="more-vertical" type="feather" size={20} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 5
  },
  containerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  username: {
    paddingHorizontal: 10,
    fontWeight: '600'
  },
  containerRight: {
    flex: 1,
  }
});

export default PostHeader;
