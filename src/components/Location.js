import React, { Component, Fragment } from 'react';
import { Marker } from "react-leaflet";
import L from 'leaflet'
import dm from '../images/dog_marker.png'

import Panel from './Panel'
import connect from "react-redux/es/connect/connect";

let myIcon = L.icon({
    iconUrl: require('../images/dog_marker_line.png'),
    iconSize: [43, 44],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

class Location extends Component {

    getmarks = () => {
        const { focusMarkerId, location } = this.props;
        // console.log(focusMarkerId)
        const position = [location.coordinates.latitude, location.coordinates.longitude];


        if (focusMarkerId === location.id) {
            return (
                <Marker
                    position={position}
                    onClick={() => this.props.changeCenter(position, location)}
                    icon={myIcon}
                >
                </Marker>
            )
        }
    }
    
    render() {

        const { focusOnMarker, focusMarkerId, location } = this.props;
        const position = [location.coordinates.latitude, location.coordinates.longitude];

        return (
            <Fragment>

                { focusOnMarker
                    ?
                        this.getmarks()
                    :
                    (
                        <Marker
                            position={position}
                            onClick={() => this.props.changeCenter(position, location)}
                            icon={myIcon}
                        >
                            {/*<Panel location={this.props.location} />*/}
                        </Marker>
                    )

                }

            </Fragment>

        )
    }
}

function mapStateToProps({ locations }, { locationId }) {
    const empty = {};
    return {
        location: locations ? locations[locationId] : empty,
        locationId
    }
}

export default connect(mapStateToProps)(Location);