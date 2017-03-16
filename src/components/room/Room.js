import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import Mapp from '../map/Mapp'


const styles = StyleSheet.create({
  container: {
    marginTop: 85,
    paddingRight: 20,
    flex : 1,
  },
  map: {
    width: 335,
    height: 335,
  }
});

class Room extends React.Component {

  render() {
    const {
      price,
      description,
      ratingValue,
      title,
      user,
      _id,
      reviews,
      photos,
      loc,
    } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{uri:photos[0]}}
          style={{
            width: 335,
            height: 150,
           }} />
       <TouchableOpacity
       style={{

         position: 'absolute',
         right: 0,
         top: 160,
         zIndex: 11,
       }}
          onPress={() => Actions.profile({
            username: user.account.username,
            description: user.account.description,
            photos: user.account.photos,
            titleAppart : title,
            photoAppart : photos,
       })}>
           <Image style={{
             width: 50,
             height: 50,
             borderRadius: 25,
           }}
           source={{ uri: user.account.photos[0]}}
           />
         </TouchableOpacity>
        <Text>{title}</Text>
        <Text>{ratingValue} étoiles</Text>
        <Text>{reviews} commentaires</Text>
        <Text>{description}</Text>
        <Text>{price} €</Text>
        <View>
          <Mapp
          loc= {this.props.loc}
          style={styles.map}/>
        </View>
      </View>
    );
  }
}

export default Room;
