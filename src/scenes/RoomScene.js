import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import Room from '../components/room/Room';
import Mapp from '../components/map/Mapp';


const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
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
      const id = this.props._id;

      this.getRoom(id, (room) => this.setState({room}));
    }

    renderRoom() {
      const {
        room,
      } = this.props;


      // if(Object.keys(room).length === 0) {
      //   return (
      //     <Text>Chargement...</Text>
      //   );
      // }

      return (
          <View style={styles.container}>
            <Room
              title= {this.props.title}
              description= {this.props.description}
              price= {this.props.price}
              ratingValue= {this.props.ratingValue}
              user= {this.props.user}
              _id= {this.props._id}
              reviews= {this.props.reviews}
              photos= {this.props.photos}
              loc= {this.props.loc}/>
            <Mapp
              loc= {this.props.loc}/>
          </View>

      );
    }

  render() {
    // console.log('TEST 1', this.props._id);
    // console.log('TEST 2', this.props.city.loc[0]);
    return (
      <View style={styles.container}>
        {this.renderRoom()}
      </View>
    );
  }
}

export default RoomScene;
