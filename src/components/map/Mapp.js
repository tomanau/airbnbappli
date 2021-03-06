import React from 'react';
import Map from 'react-native-maps';



class Mapp extends React.Component {
  render() {
    const marker = {
      latitude: this.props.loc[1],
      longitude: this.props.loc[0],
    };
    return (

      <Map
        style={this.props.style}
        initialRegion={{
          latitude: marker.latitude,
          longitude: marker.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        }}>
        <Map.Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={'à modifier'}
          description={'à modifier'} />
        </Map>
    );
  }
}

export default Mapp;
