import React from 'react';
import HomeScene from './src/scenes/HomeScene';
import ProfileScene from './src/scenes/ProfileScene';
import RoomScene from './src/scenes/RoomScene';
import LogInScene from './src/scenes/LogInScene';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#FF5A5F', // changing navbar color
  },
  navTitle: {
   color: 'white', // changing navbar title color
  },
})

class App extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key={'login'} title={'Connexion'} component={LogInScene} />
        <Scene key={'home'} title={'Mon Airbnb'} component={HomeScene} />
        <Scene key={'room'} title={'Chambre'} component={RoomScene} />
        <Scene key={'profile'} title={'Utilisateur'} component={ProfileScene} />
      </Router>
    );
  }
}

export default App;
