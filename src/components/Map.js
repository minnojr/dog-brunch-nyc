import React, { Component } from 'react'
import { Map as LeafMap, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import { locations } from "../utils/data";

import Header from './Header'
import Location from './Location'

export default class Map extends Component {

    render() {
        const centerPosition = [40.7208, -73.9560];

        return (
            <LeafMap
                center={centerPosition}
                zoomControl={false}
                zoom={13}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                touchZoom={false}
                boxZoom={false}
                keyboard={false}
            >

                <Header/>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                />

                { locations.map((location) => (
                    <Location
                        location={location}
                    />

                ))}

                {/*<Marker position={clintonStBaking}>*/}
                    {/*<Popup>*/}
                        {/*Clinton St Baking Company*/}
                    {/*</Popup>*/}
                {/*</Marker>*/}


                {/*<Marker position={bhDairy}>*/}
                    {/*<Popup>*/}
                        {/*B&H Dairy*/}
                    {/*</Popup>*/}
                {/*</Marker>*/}

                {/*<Marker position={eggShopManhatten}>*/}
                    {/*<Popup>*/}
                        {/*Egg Shop Manhatten*/}
                    {/*</Popup>*/}
                {/*</Marker>*/}

                {/*<Marker position={eggShopBrooklyn}>*/}
                    {/*<Popup>*/}
                        {/*Egg Shop Brooklyn*/}
                    {/*</Popup>*/}
                {/*</Marker>*/}



                {/*<Marker position={position}>*/}
                    {/*<Popup>*/}
                        {/*NYC*/}
                    {/*</Popup>*/}
                {/*</Marker>*/}
            </LeafMap>
        )
    }
}
