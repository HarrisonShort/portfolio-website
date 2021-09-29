import React from 'react'
import '../../../App.css'
import './Portfolio.css'
import PortfolioThumbnail from './PortfolioThumbnail'

export default function Portfolio() {
    return (
        <React.Fragment>
            <h1 className="portfolio">PORTFOLIO</h1>
            <div className="grid-container">
                <div className="grid-row">
                    <div class="grid-item">
                        <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" />
                    </div>
                    <div class="grid-item">
                        <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" />
                    </div>
                    <div class="grid-item">
                        <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" />
                    </div>
                </div>
                <div className="grid-row">
                    <div class="grid-item">
                        <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" />
                    </div>
                    <div class="grid-item">
                        <PortfolioThumbnail imgSrc="/images/harrison_okunoshima.jpg" />
                    </div>
                    <div class="grid-item">
                        <PortfolioThumbnail imgSrc="/images/jetsetradiologo.jpg" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}