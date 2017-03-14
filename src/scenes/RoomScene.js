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
console.log("_id", this.props._id)
    return (

      <View>
        <Room
          title= {this.props.title}
          description= {this.props.description}
          price= {this.props.price}
          ratingValue= {this.props.ratingValue}
          user= {this.props.user}
          _id= {this.props.id}
          reviews= {this.props.reviews}/>
      </View>


    );
  }
}

export default RoomScene;
