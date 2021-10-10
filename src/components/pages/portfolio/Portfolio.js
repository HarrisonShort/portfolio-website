import React from 'react'
import '../../../App.css'
import './Portfolio.css'
import PortfolioThumbnail from './PortfolioThumbnail'

export default function Portfolio() {
    return (
        <React.Fragment>
            <h1 className="portfolio">PORTFOLIO</h1>
            <div className="grid-container">
                <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" title="test" />
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