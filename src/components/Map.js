import React, {Component, Fragment} from 'react'
import { connect } from "react-redux";
import { Map as LeafMap, TileLayer, Marker, Popup, ZoomControl,  } from 'react-leaflet'
// import { locations, houses } from "../utils/data";


import Header from './Header'
import Location from './Location'
import InfoPanel from './InfoPanel'

class Map extends Component {

    state = {
        centerLong: 40.723274,
        centerLat: -73.991956,
        focusMarkerId: 0,
        focusOnMarker: false,
        holdPosition: [0,0],
        showInfo: 'panel_hide',
        focusLocation: {}
    };

    changeCenter = (position, location) => {
        console.log("change");
      this.setState((prevState) => ({
          centerLong:position[0],
          centerLat: position[1] - 0.05,
          focusMarkerId: location.id,
          focusOnMarker: true,
          holdPosition: position,
          focusLocation: location,
          showInfo: 'panel_show'
      }))
    };

    popupClosed = (e) => {
        console.log(e);
        // if (this.state.focusOnMarker) {
            this.setState((prevState) => ({
                centerLong: prevState.holdPosition[0],
                centerLat: prevState.holdPosition[1],
                focusMarkerId: 0,
                focusOnMarker: false,
                focusLocation: {},
                showInfo: 'panel_hide'
            }))
        // }
    };

    render() {
        const centerPosition = [this.state.centerLong, this.state.centerLat];

        const { focusMarkerId, focusOnMarker, showInfo } = this.state;

        return (
            <div>
            <LeafMap
                center={centerPosition}
                zoomControl={false}
                zoom={13}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                touchZoom={false}
                boxZoom={false}
                keyboard={false}
                onPopupClose={this.popupClosed}>


            >

                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
                />

                <Header />

                <InfoPanel
                    defocusMarker={this.popupClosed}
                    showInfo={showInfo}
                    focusLocation={this.state.focusLocation}
                />

                { this.props.locations && this.props.locations.map((location) => (
                    <Location
                        key={location}
                        locationId={location}
                        changeCenter={this.changeCenter}
                        focusMarkerId={focusMarkerId}
                        focusOnMarker={focusOnMarker}
                    />

                ))}
            </LeafMap>
            </div>
        )
    }
}

function mapStateToProps({ locations }) {
    const empty = [];
    return {
        locations: locations ? Object.keys(locations) : empty
    }
}

export default connect(mapStateToProps)(Map);

