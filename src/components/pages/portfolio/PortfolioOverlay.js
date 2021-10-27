import React, { useState } from 'react'
import './PortfolioOverlay.css'

export default function PortfolioOverlay(props) {
    let splitBlurb = props.data.blurb.split('\n').map(i => {
        return <p className="blurb-split">{i}</p>
    });

    const childDivHandler = (event) => {
        event.stopPropagation();
    }

    return (
        <React.Fragment>
            <div className="overlay-background" onClick={props.data.closeOverlay}>
                <div className="project-container" onClick={childDivHandler}>
                    <div className="scroll-area-container" onClick={childDivHandler}>
                        <div className="project-info" onClick={childDivHandler}>
                            <button className="close-button" onClick={props.data.closeOverlay}>X</button>
                            <p className="title">{props.data.title}</p>
                            <div className="left-side">
                                {/* // TODO: Introduce a "personal comments" and "blurb" toggle thing
                                // TODO: Figure out styling??? */}
                                {props.data.blurb ? <div className="blurb">{splitBlurb}</div> : null}
                                {props.data.tags ? <div className="tags">{props.data.tags}</div> : null}
                            </div>
                            <div className="right-side">
                                {/* //TODO: Change to be a slideshow/open full image in new tab */}
                                {props.data.screenshots ? <img className="screenshots" src={props.data.screenshots} alt=""></img> : null}
                                {props.data.studio ? <p><b>Studio: </b>{props.data.studio}</p> : null}
                                {props.data.plaform ? <p><b>Platform: </b>{props.data.plaform}</p> : null}
                                {props.data.releaseDate ? <p><b>Release Date: </b>{props.data.releaseDate}</p> : null}
                                {props.data.progress ? <p><b>Progress: </b>{props.data.progress}</p> : null}
                                {props.data.role ? <p><b>My Role: </b>{props.data.role}</p> : null}
                                {props.data.technologies ? <p><b>Tech: </b>{props.data.technologies}</p> : null}
                                {props.data.links ? <p><b>Links: </b><a href={props.data.links}>Download</a></p> : null}
                                {/* // TODO: Add additional credits */}

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment >
    )
}