import React from 'react';

export default function Loader() {
    return (
        <div className="" id="loader">
            <div className="d-flex justify-content-center align-items-center lds-roller">
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}