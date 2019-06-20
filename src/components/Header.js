import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
            <div id="add-header-container d-flex flex-row">
                <h4 id="app-header">Dog Brunch NYC</h4>
                <h6 id="app-slogan">Dog friendly brunch spots in NYC</h6>
            </div>
        )
    }
}