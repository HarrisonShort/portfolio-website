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
                    title="Portfolio Website"
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
                    imgSrc="\images\portfolio\bees-wont-exist\Logo+Transparent.png"
                    title="Bees Won't Exist"
                    onClick={() => onThumbnailClicked({
                        title: "Bees Won't Exist",
                        //#region Blurb
                        blurb: "GIANT BEES HAVE DECIMATED HUMANITY! Every day, the low buzz of death approaches further. Can you hear it? Don’t worry! It’s time for some pest control. Grab your sword. I’ll meet you by the hive! Whatever you do though, do not touch those glowing purple orbs. Don't worry about why. OK?\nBees Won't Exist is an isometric-perspective hack-and-slash game, where the player plays as a young boy named Kika. Kika is part of the human rebellion, fighting back against the Giant Bees that have taken over the Earth and, in some parts, have enslaved humanity. Players utilize dash attacks, strong attacks and dodges, whilst navigating various honey-based puzzles throughout their 1 to 3+ hour gameplay experience.\n---\nBees Won't Exist was the project I worked on during my final year in QUT's Bachelor of Games and Interactive Entertainment.Every student completing this course is initially tasked with prototyping a game idea, and then from there, the prototype is developed upon, extensive playtesting and internal QA is done and the game moves quickly into the marketing/publishing phase. For such a short time span (approximately 8 months from the start of prototype to publishing), Bees Won't Exist was extremely ambitious, but after many sleepless nights and moments of panic and despair, I'm truly proud of my contributions to the project. I served as the Sound Lead on the game, as well as a Programmer.\nIn addition, Bees Won't Exist won a place at Game Connect Asia Pacific (GCAP) 2016's student showcase down in Melbourne, Australia. I was extremely proud and honoured to have received the opportunity so early in my career!",
                        //#endregion
                        studio: "Honeyvale Games",
                        platform: "PC/Mac/Linux",
                        releaseDate: "October 25th 2016",
                        progress: "Complete!",
                        role: "Sound Lead, Programmer",
                        engine: "Unity (C#)",
                        screenshots: "/images/portfolio/bees-wont-exist/Logo+Transparent.png",
                        links: "https://gamejolt.com/games/bees-won-t-exist/194883",
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