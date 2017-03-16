import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Image,
  View
} from 'react-native';


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
      <ScrollView style={styles.container}>
        <Image style={{
          width: 200,
          height: 200,
          borderRadius: 100,
        }}
        source={{ uri: this.props.photos[0]}}
        />
        <Text> {this.props.username} </Text>
        <Text> {this.props.description} </Text>
        <Image style={{
          width: 200,
          height: 200,
        }}
        source={{ uri: this.props.photoAppart[0]}}
        />
        <Text> {this.props.titleAppart} </Text>
      </ScrollView>
    );
  }
}

export default ProfileScene;
