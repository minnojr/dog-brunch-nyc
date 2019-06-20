import React, { Component } from 'react';
import { Marker } from "react-leaflet";

import Panel from './Panel'

class Location extends Component {
    
    render() {
        return (
            <Marker position={this.props.location.position}>
                <Panel location={this.props.location} />
            </Marker>
        )
    }
}

export default Location;