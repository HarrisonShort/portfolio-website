import React, { useState } from 'react'
import '../../../App.css'
import './Portfolio.css'
import PortfolioOverlay from './PortfolioOverlay';
import PortfolioThumbnail from './PortfolioThumbnail'

export default function Portfolio() {
    const [overlay, setOverlay] = useState(null);

    const overlayShowing = (overlay != null);

    const onThumbnailClicked = (overlayData) => {
        console.log(overlayData);
        setOverlay(overlayData);
    }

    const onOverlayClosed = () => {
        setOverlay(null);
    }

    return (
        <React.Fragment>
            <h1 id="page-header">PORTFOLIO</h1>
            {overlayShowing ? <PortfolioOverlay data={overlay}></PortfolioOverlay> : null}
            <div className="grid-container">
                <PortfolioThumbnail
                    imgSrc="/images/harrison_okunoshima.jpg"
                    title="test"
                    onClick={() => onThumbnailClicked({
                        title: "test",
                        year: 2021,
                        details: "React, Javascript, etc.",
                        blurb: "This is my portfolio website.",
                        tags: "React",
                        closeOverlay: onOverlayClosed
                    })}
                />
                <PortfolioThumbnail
                    imgSrc="/images/harrison_okunoshima.jpg"
                    title="test"
                    onClick={() => onThumbnailClicked({
                        title: "test",
                        year: 2021,
                        details: "React, Javascript, etc.",
                        blurb: "This is my portfolio website.",
                        tags: "React",
                        screenshots: "test",
                        closeOverlay: onOverlayClosed
                    })}
                />
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