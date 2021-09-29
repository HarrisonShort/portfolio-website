import React from 'react'
import './PortfolioThumbnail.css'

export default function PortfolioThumbnail(props) {
    return (
        <div className="imageContainer">
            <img src={props.imgSrc} alt="Harrison Okunoshima" className="thumbnailImage" />
        </div>
    )
}