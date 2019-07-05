import React from 'react';

export default function PanelRating({ ratingImage }) {
    return (
        <div className="ratings_img_div">
            <h6><img className="rating_img" src={ratingImage} /></h6>
        </div>
    )
}
