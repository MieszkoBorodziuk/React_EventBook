import React from 'react';


const { compose } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");

const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
)(props => {
    return (
        <GoogleMap
            center={{ lat: props.markerCordinates[0], lng: props.markerCordinates[1] }}
            defaultZoom={11}
        >
            <Marker
                position={{ lat: -34.397, lng: 151 }}
            />
        </GoogleMap>
    )
}
);

export default MapWithAMarker



