import React from 'react';

export default function PanelHeader({ name }) {
    return (
        <h3 className="d-flex justify-content-center location_name">
            <span>{ name }</span>
        </h3>
    )
}