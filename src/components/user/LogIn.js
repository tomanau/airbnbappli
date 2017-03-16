import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Image,
  Alert,
  Action,
} from 'react-native';
import Api from "../core/Api.js";


const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    paddingRight: 20,
    flex : 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 20,
    borderColor: '#FF5A5F',
  },
  button: {
    height: 40,
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#FF5A5F',
    borderColor: 'grey',
  },
});



class LogIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      identifiant: "",
      password: ""
    };

    this.onPress = this.onPress.bind(this);
    this.onIdentifiantChange = this.onIdentifiantChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onPress() {
    Api.logIn(
      {
        identifiant: this.state.identifiant,
        password: this.state.password
      },
      res => {
        if (res.error) {
          alert(res.error);
        } else {
          Api.setUser(res);
          Actions.home();
        }
      }
    );
  }

  onIdentifiantChange(event) {
    this.setState({ identifiant: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri:'http://www.lyoncapitale.fr/var/plain_site/storage/images/media/01-photos/airbnb-logo/5122909-1-fre-FR/AirBnB-Logo.png'}}
          style={{
            width: 216,
            height: 67,
            marginBottom: 60,
           }} />
        <View>
           <TextInput
            type="text"
            name="identifiant"
            style={styles.input}
            placeholder="Identifiant"
            onChangeText={this.onIdentifiantChange}
            />
          <TextInput
            type="password"
            name="password"
            style={styles.input}
            placeholder="Mot de Passe"
            value={this.state.password}
            onChange={this.onPasswordChange}
             />
             <View style={styles.button}>
               <Button
                onPress={this.onPress}
                title="Connexion"
                color= 'white'
              />
            </View>
         </View>
      </View>
      )
    }
  }

export default LogIn;
