import React, { Component } from 'react';
import { Popup } from "react-leaflet";

class Panel extends Component {

    render() {
        return (
            <Popup id="panel-container">
                { this.props.location.name }
            </Popup>
        )
    }
}

export default Panel;