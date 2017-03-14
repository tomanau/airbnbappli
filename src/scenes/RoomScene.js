import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import Room from '../components/room/Room'

class RoomScene extends React.Component {


  render() {
console.log("_id", this.props._id)
    return (

      <View>
        <Room
          _id= {this.props.}/>
      </View>


    );
  }
}

export default RoomScene;
