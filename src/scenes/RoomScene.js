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

    return (
        <Room/>
    );
  }
}

export default RoomScene;
