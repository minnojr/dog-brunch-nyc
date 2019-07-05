import React, { Component } from 'react';
import { Popup } from "react-leaflet";
import InstagramEmbed from 'react-instagram-embed';


class Panel extends Component {

    render() {
        return (
            <Popup id="panel-container">
                <InstagramEmbed
                    url='https://www.instagram.com/p/BvUJCCHjiol/'
                    maxWidth={200}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                />
            </Popup>
        )
    }
}

export default Panel;