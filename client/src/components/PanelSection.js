import React, { Fragment } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PanelSection({ info, icon }) {
    return (
        <Fragment>
            { info && (
                <Fragment>
                    <div className="d-flex justify-content-between panel_section">
                        <span>
                            <FontAwesomeIcon id="panel_icon" icon={`${icon}`}/>
                        </span>
                        <span></span>
                        <span>{ info }</span>
                    </div>
                    <hr className="pane_info_hr"/>
                </Fragment>
            )}
        </Fragment>
    )
}
