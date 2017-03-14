import React from 'react';
import HomeScene from './src/scenes/HomeScene';
import ProfileScene from './src/scenes/ProfileScene';
import RoomScene from './src/scenes/RoomScene';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Router,
  Scene,
} from 'react-native-router-flux';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'home'} title={'Accueil'} component={HomeScene} />
        <Scene key={'room'} title={'Chambre'} component={RoomScene} />
        <Scene key={'profile'} title={'Utilisateur'} component={ProfileScene} />
      </Router>
    );
  }
}

export default App;
