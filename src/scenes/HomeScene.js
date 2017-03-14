import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  Button,
  ListView,
  Image,
  View
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingLeft: 15,
    paddingRight: 15,
    flex : 1,
    backgroundColor: "#FF5A5F",
  },
  h1: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});


class HomeScene extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/room?city=paris')
      .then((res) => res.json())
      .then(rooms => {
        console.log("json rooms", rooms.rooms);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rooms.rooms),
        });

      });
  }

  renderRooms(rowData) {
console.log("LOG",rowData.user.account.username);
    return (
      <View>
        <Image
          source={{ uri: rowData.photos[0] }}
          style={{
            width: 345,
            height: 100,
           }} />
         <Image
           source={{ uri: rowData.user.account.photos[0] }}
           alt={rowData.title}
           style={{
             borderRadius: 25,
             width: 50,
             height: 50,
           }} />
        <Text>{rowData.title}</Text>
        <Text>{rowData.price} €</Text>
        <Text>{rowData.ratingValue} étoiles - {rowData.reviews} commentaires</Text>
      </View>
    );
  }

  render() {
  console.log('App#componentDidMount this.state.dataSource.getRowCount()', this.state.dataSource.getRowCount());
    if (this.state.dataSource.getRowCount() === 0) {
      return (
        <View
          style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          Page HomeScene
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRooms} />
        <Button
          color="black"
          title={'Go to Profile scene'}
          onPress={() => Actions.profile({ name: 'Antoine' })} />
        <Button
          color="black"
          title={'Go to Room scene'}
          onPress={() => Actions.room()} />
      </View>
    );
  }
}

export default HomeScene;
