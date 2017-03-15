import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  Button,
  ListView,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import RoomScene from '../../scenes/RoomScene';
import Room from '../room/Room';

const styles = StyleSheet.create({
  container: {
    marginTop: 85,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    flex : 1,
  },
});

class Home extends React.Component {

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
        console.log("rooms.rooms");
        console.log(rooms.rooms);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rooms.rooms),
        });

      });
  }



  renderRooms(rowData) {
    console.log('ENVOIE : ', rowData);

    return (
      <View style={{
        position: 'relative',
      }}>
        <TouchableOpacity onPress={() => {
          return Actions.room({
            title: rowData.title,
            description: rowData.description,
            price: rowData.price,
            ratingValue: rowData.ratingValue,
            user: rowData.user,
            loc: rowData.loc,
            _id: rowData._id,
            photos: rowData.photos,
            reviews: rowData.reviews,
        })}}>
          <Image
            source={{ uri: rowData.photos[0] }}
            style={{
              width: 345,
              height: 150,
             }} />
          </TouchableOpacity>
           <Image
           source={{ uri: rowData.user.account.photos[0] }}
           style={{
             borderRadius: 25,
             position: 'absolute',
             right: 0,
             bottom: 23,
             width: 50,
             height: 50,
             zIndex: 1,
           }} />
        <Text style={{
          paddingTop: 15,
        }}>{rowData.title}</Text>
        <Text style={{
          backgroundColor: 'black',
          padding: 10,
          color: 'white',
          position: 'absolute',
          bottom: 85,
          fontSize: 20,
          left: 0,
        }}>
        {rowData.price} €</Text>
        <Text style={{
          paddingBottom: 14,
        }}>{rowData.ratingValue} ★ - {rowData.reviews} commentaires</Text>
        <View style={{
          height: 1,
          backgroundColor: '#DCDBE1',
          marginBottom: 14,
        }}>
        </View>
      </View>
    );
  }

  render() {
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRooms} />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <Button
            color="black"
            title={'Profile'}
            onPress={() => Actions.profile({ name: 'Antoine' })} />
          <Button
            color="black"
            title={'Home'}
            onPress={() => Actions.home()} />
        </View>
      </View>

    );
  }
}

export default Home;
