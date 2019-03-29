import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

class Story extends PureComponent {
  render() {
    const { imageUri } = this.props;

    return (
      <View style={styles.container}>
        <Avatar
          size="medium"
          rounded
          source={{
            uri: `${imageUri}`
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 2
  }
});

export default Story;
