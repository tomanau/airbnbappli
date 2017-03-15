import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    marginTop: 85,
    paddingLeft: 20,
    paddingRight: 20,
    flex : 1,
  },
});


class ProfileScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{
          width: 200,
          height: 200,
          borderRadius: 100,
        }}
        source={{ uri: this.props.photos[0]}}
        />
        <Text> {this.props.username} </Text>
        <Text> {this.props.description} </Text>

      </View>
    );
  }
}

export default ProfileScene;
