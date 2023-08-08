import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
export class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}
