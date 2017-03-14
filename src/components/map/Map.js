import React from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.center}
    center={props.center}>
    {props.markers.map((marker, index) => {
      return (
        <Marker
          key={index}
          position={marker} />
      );
    })}

  </GoogleMap>
));

SimpleMapExampleGoogleMap.defaultProps = {
  center: {
    lat: 0,
    lng: 0,
  }
}


export default class SimpleMapExample extends React.Component {

  render() {
    console.log('markers', this.props.markers);
    return (
      <SimpleMapExampleGoogleMap
        center={this.props.center}
        markers={this.props.markers}
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}
