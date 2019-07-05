import React from 'react';

export default function PanelImage({ image_url }) {
    return (
        <div className="d-flex align-items-center justify-content-center align-middle panel_img_div">
            <img id="location_img" src={ image_url } />
        </div>
    )
}
