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
    justifyContent: 'center',
    flex : 1,
  },
});

class Room extends React.Component {

  render() {
console.log( 'Room#render', this.props);
    const {
      price,
      description,
      ratingValue,
      title,
      user,
      _id,
      reviews,
      loc,
      photos,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{ratingValue} étoiles</Text>
        <Text>{reviews} commentaires</Text>
        <Text>{description}</Text>
        <Text>{price} €</Text>
      </View>
    );
  }
}

export default Room;
