import React, {Component, Fragment} from 'react'
import { connect } from "react-redux";
import { Map as LeafMap, TileLayer } from 'react-leaflet'

import Header from './Header'
import Location from './Location'
import InfoPanel from './InfoPanel'
import Loader from './Loader'


class Map extends Component {

    componentWillMount() {
        document.addEventListener('mousedown', this.clickOutisdePanelToClose, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutisdePanelToClose, false);
    }

    state = {
        centerLong: 40.733274,
        centerLat: -73.988888,
        focusMarkerId: 0,
        focusOnMarker: false,
        holdPosition: [0,0],
        showInfo: 'panel_hide',
        focusLocation: {},
        loading: true
    };

    changeCenter = (position, location) => {
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

    panelClosed = (e) => {
        this.setState((prevState) => ({
            centerLong: prevState.holdPosition[0],
            centerLat: prevState.holdPosition[1],
            focusMarkerId: 0,
            focusOnMarker: false,
            focusLocation: {},
            showInfo: 'panel_hide'
        }))
    };

    clickOutisdePanelToClose = (e) => {
        if(this.node.contains(e.target) && this.state.focusOnMarker) {
            this.panelClosed();
        }
    };

    render() {
        const centerPosition = [this.state.centerLong, this.state.centerLat];

        const { focusMarkerId, focusOnMarker, showInfo } = this.state;
        const { loader } = this.props;

        return (
            <Fragment>
                <InfoPanel
                    defocusMarker={this.panelClosed}
                    showInfo={showInfo}
                    focusLocation={this.state.focusLocation}
                />

                <div ref={ node => this.node = node }>
                    <LeafMap
                        center={centerPosition}
                        zoomControl={false}
                        zoom={13}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                        touchZoom={false}
                        boxZoom={false}
                        keyboard={false}
                        onPopupClose={this.panelClosed}>
                    >

                        { !loader && (
                            <Loader />
                        )}

                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                            url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
                        />

                        <Header />

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
            </Fragment>
        )
    }
}

function mapStateToProps({ locations, loader }) {
    const empty = [];
    return {
        locations: locations ? Object.keys(locations) : empty,
        loader
    }
}

export default connect(mapStateToProps)(Map);

