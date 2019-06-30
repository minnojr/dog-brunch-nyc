import React, { Component } from 'react'
import mmp_logo from '../images/miles_minno_photography_logo.png'
import dm from '../images/dog_marker.png'


export default class Header extends Component {

    render() {
        return (
            <div id="add-header-container d-flex flex-row">
                <h4 id="app-header">Brunch Pup NYC</h4>
                <h5></h5>
                <h6 id="app-slogan">The "Bring your dog to brunch" map</h6>

            </div>
        )
    }
}