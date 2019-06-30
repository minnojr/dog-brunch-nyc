import React, { Component } from 'react'
import L from 'leaflet'
import {Map as LeafMap} from "react-leaflet";
// const { BaseLayer, Overlay } = LayersControl

const center = [51.505, -0.09]
const rectangle = [[51.49, -0.08], [51.5, -0.06]]

export default class TestMap extends Component {

    state = {
        centerLong: 40.723274,
        centerLat: -73.991956,
        holdPosition: [0,0]
    };

    componentDidMount() {
        this.map = L.map('map', {
            center: [this.state.centerLong, this.state.centerLat],
            zoom: 13,
            zoomControl: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            touchZoom: false,
            boxZoom: false,
            keyboard: false,
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);
    }

    render() {
        return (
            <div id='map'>
            </div>
        )
    }
}