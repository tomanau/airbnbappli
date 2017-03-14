import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import Home from '../components/core/Home'

class HomeScene extends React.Component {

  render() {
    
    return (
        <Home/>
    );
  }
}

export default HomeScene;
