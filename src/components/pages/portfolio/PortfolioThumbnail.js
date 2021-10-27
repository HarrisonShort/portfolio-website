import React from 'react'
import PortfolioOverlay from './PortfolioOverlay'
import './PortfolioThumbnail.css'

export default function PortfolioThumbnail(props) {
    const onThumbnailClicked = () => {
        props.onClick(
            <PortfolioOverlay></PortfolioOverlay>
        );
    }

    return (
        <div className="imageContainer" onClick={onThumbnailClicked}>
            <img src={props.imgSrc} alt="Harrison Okunoshima" className="thumbnailImage" />
            <p className="title">{props.title}</p>
        </div>
    )
}