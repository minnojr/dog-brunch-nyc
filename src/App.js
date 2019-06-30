import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { handleReceiveLocations } from "./actions/locations";

import Map from './components/Map'
import TestMap from './components/TestMap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// To Do:
// 0. Add icons for info in panel - drop mark for address, telephone for phone number etc, see yelp page
// 1. helper methods for setting star image, get bigger better image versions
// 2. also want to include font awesome dollar sign for money? helper method for this
// 3. link address to "open up in good maps"... can we get users current location to enter in as well with geo locations?
// 4. do we want a way to navigate to "next" location when focusing on one (with arrows next to panel?)
// 5. include instagram link to bottom of panel for location?
// 6.


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveLocations());
    }

    render() {

        library.add(faTimes);

        return (
            <div className="App">
                {/*<TestMap />*/}
                <Map />
            </div>
        );
    }
}

export default connect()(App);
