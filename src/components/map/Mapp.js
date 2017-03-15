import React from 'react';
import Map from 'react-native-maps';



class Mapp extends React.Component {
  render() {
    const marker = {
      latitude: this.props.city.loc[1],
      longitude: this.props.city.loc[0],
    };
    console.log('objetMAPP', this.props.city);
    console.log('lattitude', this.props.city.loc[1]);
    console.log('longitude', this.props.city.loc[0]);
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
          title={'Le Reacteur'}
          description={'React Native training institute'} />
        </Map>
    );
  }
}

export default Mapp;
