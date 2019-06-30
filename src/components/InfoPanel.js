import React, { Component, Fragment } from 'react';
import connect from "react-redux/es/connect/connect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import reg_0 from '../images/regular_0.png';
import reg_1 from '../images/regular_1.png';
import reg_1_half from '../images/regular_1_half.png';
import reg_2 from '../images/regular_2.png';
import reg_2_half from '../images/regular_2_half.png';
import reg_3 from '../images/regular_3.png';
import reg_3_half from '../images/regular_3_half.png';
import reg_4 from '../images/regular_4.png';
import reg_4_half from '../images/regular_4_half.png';
import reg_5 from '../images/regular_5.png';


class InfoPanel extends Component {

    render() {

        const { name, image_url, location, rating, price, url } = this.props.focusLocation;
        const address = location ? location.address1 : ''
        const city = location ? location.city : ''

        let ratingImage = reg_0;

        if (rating === 1) {
            ratingImage = reg_1
        }  else if (rating === 1.5) {
            ratingImage = reg_1_half
        } else if (rating === 2) {
            ratingImage = reg_2
        } else if (rating === 2.5) {
            ratingImage = reg_2_half
        } else if (rating === 3) {
            ratingImage = reg_3
        } else if (rating === 3.5) {
            ratingImage = reg_3_half
        } else if (rating === 4) {
            ratingImage = reg_4
        } else if (rating === 4.5) {
            ratingImage = reg_4_half
        } else if (rating === 5) {
            ratingImage = reg_5
        }

        return (
            <Fragment>

                <div id="focus_info"  className={this.props.showInfo}>
                    <div className="d-flex flex-column" id="inner_info_panel">
                        <h3 className="d-flex justify-content-between location_name">
                            <span>{ name }</span>
                            <span></span>
                            <span onClick={() => this.props.defocusMarker()}><FontAwesomeIcon icon="times"/></span>
                        </h3>
                        <img id="location_img" src={image_url} />
                        <br />
                        <div>
                            <h6><img className="rating_img" src={ratingImage} /></h6>
                        </div>
                        <hr />
                        <div className="panel_section">
                            <h4 className="location_name panel_header">Address</h4>
                            <h6>{ address }, { city }</h6>
                        </div>
                        <hr />
                        <div className="panel_section">
                            <h4 className="location_name panel_header">Price</h4>
                            <h6>{ price }</h6>
                        </div>
                        <hr />
                        <div>
                            <h6><a target="_blank" href={ url }>Yelp</a></h6>
                        </div>
                        <div>
                            <h6 onClick={() => this.props.defocusMarker()}>Exit</h6>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

function mapStateToProps({ locations }, {  }) {
    const empty = {};
    return {
        // location: locations ? locations[locationId] : empty,
        // locationId
    }
}

export default connect(mapStateToProps)(InfoPanel);