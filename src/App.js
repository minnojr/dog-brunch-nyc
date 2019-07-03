import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'
import { handleReceiveLocations } from "./actions/locations";

import Map from './components/Map'
import TestMap from './components/TestMap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


// To Deploy MVP:
// 1. Make panel not briefly appear during pqge load
// 2. How do I make the API requests efficiently and correctly?
// 3. Add more brunch spots to data (MVP amount)
// 4. Lock in name and Buy domain
// 5. Deploy to Firebase or Heorku or something...
// 6. Why does address show up twice in google directions functionality?



// To Do additional:
// 1. Add more info to info panel? (Review count, other stuff?)
// 2. Make each info panel content section its own component, also do same for header & image
// 3. helper methods?
// 4. Navigate to "next" address with arrows on side of Info Panel?
// 5. Give Credits



class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveLocations());
    }

    render() {

        library.add(faTimes);
        library.add(faMapMarkerAlt);
        library.add(faMoneyBillAlt);
        library.add(faPhone);

        return (
            <div className="App">
                <Map />
            </div>
        );
    }
}

export default connect()(App);
