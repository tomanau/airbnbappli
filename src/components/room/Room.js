import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex : 1,
  },
  h1: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});


class RoomScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          Page RoomScene
        </Text>
      </View>
    );
  }
}

export default RoomScene;
