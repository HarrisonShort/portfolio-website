import React, { useState } from 'react'
import './PortfolioOverlay.css'

export default function PortfolioOverlay(props) {
    return (
        <React.Fragment>
            <div className="portfolio-overlay" onClick={props.data.closeOverlay}>
                <div className="project-information" onClick>
                    <div className="project-container">
                        <button className="close-button" onClick={props.data.closeOverlay}>X</button>
                        <div>
                            <p className="title">{props.data.title}</p>
                            <p className="year">{props.data.year}</p>
                        </div>

                        <p className="details">{props.data.details}</p>
                        <p className="blurb">{props.data.blurb}</p>
                        {props.data.screenshots ? <div className="screenshots">{props.data.screenshots}</div> : null}
                        <div className="tags">{props.data.tags}</div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}