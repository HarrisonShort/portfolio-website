import React, { useState } from 'react'
import '../../../App.css'
import './Portfolio.css'
import PortfolioThumbnail from './PortfolioThumbnail'

export default function Portfolio() {
    const [overlay, setOverlay] = useState(null);

    const overlayShowing = (overlay != null);

    const onThumbnailClicked = (overlayInfo) => {
        setOverlay(overlayInfo);
    }

    return (
        <React.Fragment>
            <h1 id="page-header">PORTFOLIO</h1>
            <div className="overlay">
                {overlayShowing ? overlay : null}
            </div>
            <div className="grid-container">
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" onClick={onThumbnailClicked} />
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
            </div>
        </React.Fragment>
    )
}