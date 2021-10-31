import React from 'react'
import PortfolioOverlay from './PortfolioOverlay'
import './PortfolioThumbnail.css'

export default function PortfolioThumbnail(props) {
    return (
        <div className="imageContainer" onClick={props.onClick}>
            <img src={props.imgSrc} alt="Harrison Okunoshima" className="thumbnailImage" />
            <p className="title">{props.title}</p>
        </div>
    )
}