import React, { Component, Fragment } from 'react';

import PanelHeader from './PanelHeader'
import PanelImage from './PanelImage'
import PanelRating from './PanelRating'
import PanelSection from './PanelSection'

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

    state = {
        userCoords: []
    };

    render() {

        navigator.geolocation.getCurrentPosition((res) => {
            this.setState(() => ({
                userCoords: [res.coords]
            }))
        });

        const { name, image_url, location, rating, price, url, display_phone } = this.props.focusLocation;
        const { userCoords } = this.state;

        const latitude = userCoords[0] ? userCoords[0].latitude : [];
        const longitude = userCoords[0] ? userCoords[0].longitude : [];

        const address = location ? location.address1 : '';
        const escapedAddress = encodeURI(address);

        const city = location ? location.city : '';
        const escapedCity = encodeURI(city);

        const currState = location ? location.state : '';
        const escapedState = encodeURI(currState);

        const currName = name ? name : '';
        const escapedName = encodeURI(currName);

        const display_address = `${address}, ${city}`;

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
                <div id="focus_info"  className={`d-flex justify-content-center align-middle align-items-middle ${this.props.showInfo}`}>
                    <div className="d-flex flex-column" id="inner_info_panel">

                        <PanelHeader name={ name } />
                        <PanelImage image_url={ image_url }/>

                        <div className="panel_content_div">

                            <PanelRating ratingImage={ ratingImage }/>

                            { address && (
                                <PanelSection info={ address } icon="map-marker-alt" />
                            )}

                            { display_phone && (
                                <PanelSection info={ display_phone } icon="phone" />
                            )}

                            { price && (
                                <PanelSection info={ price } icon="money-bill-alt" />
                            )}
                            <div>
                                <a id="yelp_btn" className='btn' rel="noopener noreferrer" target="_blank" href={ url }>
                                    Y e l p
                                </a>
                                { userCoords.length > 0
                                    ?
                                    (
                                    <a id="maps_btn" className='btn' rel="noopener noreferrer" target="_blank"
                                       href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${escapedAddress}+${escapedCity}+${escapedState}&travelmode=transit`} >
                                        M a p s
                                    </a>
                                    )
                                    :
                                    (
                                        <a id="maps_btn" className='btn' rel="noopener noreferrer" target="_blank"
                                           href={`https://www.google.com/maps/search/?api=1&query=${escapedName}+${escapedAddress}+${escapedCity}+${escapedState}`} >
                                            M a p s
                                        </a>
                                    )

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default InfoPanel;