import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
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

class RoomScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      room: {},
    };
  }

  getRoom(roomId, callback) {
    fetch(`http://localhost:3001/api/room/${roomId}`)
      .then(res => res.json())
        .then((json) => {
          callback(json);
      });
  }

  componentDidMount() {
    const id = this.props.params.id;

    console.log("this.props", this.props);
    console.log("this.props.params", this.props.params);
    console.log("this.props.params.id", this.props.params.id);

    getRoom(id, (room) => this.setState({room}));
  }

  renderRoom() {
    const {
      room,
    } = this.state;
    console.log("room = ", room);

    if(Object.keys(room).length === 0) {
      return (
        <p>Chargement...</p>
      );
    }

    return (
        <Room
        title= {room.title}
        description={room.description}
        price={room.price}
        ratingValue={room.ratingValue}
        loc={room.loc}
        user={room.user}
        _id={room._id}
        photos={room.photos}
        reviews={room.reviews}
        />
    );
  }


  render() {
    return (
      <View style={styles.container}>

          {this.renderRoom()}

      </View>
    );
  }
}

export default RoomScene;
