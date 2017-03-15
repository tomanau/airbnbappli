import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import Room from '../components/room/Room'

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
      this.getRoom = this.getRoom.bind(this);
    }

    getRoom(roomId, callback) {
      fetch(`http://localhost:3001/api/room/${roomId}`)
        .then(res => res.json())
          .then((json) => {
            callback(json);
        });
    }

    componentDidMount() {
      console.log('componentDidMount');
      const id = this.props._id;
      console.log('this.props._id', this.props._id);

      this.getRoom(id, (room) => this.setState({room}));
    }

    renderRoom() {
      console.log('renderRoom');
      const {
        room,
      } = this.props;
      console.log("room = ", room);
      console.log('this.props', this.props);
      console.log('this.state', this.state);

      // if(Object.keys(room).length === 0) {
      //   return (
      //     <Text>Chargement...</Text>
      //   );
      // }

      return (

          <Room
            title= {this.props.title}
            description= {this.props.description}
            price= {this.props.price}
            ratingValue= {this.props.ratingValue}
            user= {this.props.user}
            _id= {this.props._id}
            reviews= {this.props.reviews}/>
      
      );
    }

  render() {
    console.log('render2', this.props);
    return (
      <View style={styles.container}>
        {this.renderRoom()}
      </View>
    );
  }
}

export default RoomScene;
