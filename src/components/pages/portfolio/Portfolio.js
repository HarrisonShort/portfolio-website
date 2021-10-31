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
                        title: "Portfolio Website",
                        blurb: "This is my portfolio website.",
                        progress: "In Progress!",
                        technologies: "HTML/CSS/JS, React",
                        links: "https://www.harrisonshort.com",
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
                        technologies: "Unity, C#",
                        screenshots: "/images/portfolio/bees-wont-exist/Logo+Transparent.png",
                        closeOverlay: onOverlayClosed
                    })}
                />
                <PortfolioThumbnail
                    imgSrc="\images\portfolio\bees-wont-exist\soundtrack-art.png"
                    title="Bees Won't Exist Official Soundtrack"
                    onClick={() => onThumbnailClicked({
                        title: "Bees Won't Exist Official Soundtrack",
                        //#region Blurb
                        blurb: "The Bees Won’t Exist Official Soundtrack features 10 songs composed by myself specifically for the game, as well as one track (Pesky Bee!) that was originally composed by the team’s Lead Artist David Upcher, before I took the file to modify and extend the track. The soundtrack is primarily in an orchestral style, taking main inspiration from game franchises such as The Legend of Zelda and Final Fantasy. There is one exception to this (Feeding Time) which deviates from the theme to appropriately emphasize the tone of a certain section of the game.\n---\nAs an aspiring sound designer and games music composer, the prospect of working on a fully-fledged soundtrack for my first game was both daunting and exciting. As I’ve taught myself music production, I’ve never really put together anything completely solid, like an EP or an album. Essentially, putting my hand up to put together music for various sections of the game was me running head first into this challenge, but ultimately I think the choice paid off greatly. The situation didn’t lend me any time for indecision and I was a strict timeline to produce tracks for the game as needed, meaning that I actually completed each track instead of second-guessing myself or trying to absolutely perfect each song – an issue I’ve run into on various previous occasions. In the end, I’m extremely proud of the soundtrack, and throughout testing, audio was consistently sited as one of the top aspects of the game by playtesters.",
                        //#endregion
                        studio: "Honeyvale Games",
                        platform: "PC/Mac/Linux",
                        releaseDate: "October 25th 2016",
                        progress: "Complete!",
                        role: "Sound Lead, Programmer",
                        technologies: "Unity, C#",
                        screenshots: "/images/portfolio/bees-wont-exist/soundtrack-art.png",
                        closeOverlay: onOverlayClosed
                    })}
                />
                <PortfolioThumbnail
                    imgSrc="images/portfolio/plunder-pups/logo.png"
                    title="Plunder Pups"
                    onClick={() => onThumbnailClicked({
                        title: "Plunder Pups",
                        //#region Blurb
                        blurb: "Pick your pup, grab the most chew toys and rule the backyard!\nBased on the rules of the schoolyard game Rob the Nest, Plunder Pups pits four players against each other in a frenetic race to obtain the most chew toys at the end of the game. Through a mix of sprinting, headbutting and stealing the right player's chew toys, each game proves intense and nerve wracking right to the last moment!\nPlunder Pups (ver. 1.0.0.) features the core \"Rob the Nest- esque\" gameplay mode and options to play with up to 4 human players locally, with Xbox 360 controller support.",
                        //#endregion
                        studio: "Red Chung",
                        platform: "PC",
                        releaseDate: "September 3rd 2017",
                        progress: "Complete!",
                        role: "Sole Developer",
                        technologies: "Unity, C#",
                        screenshots: "images/portfolio/plunder-pups/logo.png",
                        links: "https://gamejolt.com/games/plunder_pups/259764",
                        closeOverlay: onOverlayClosed
                    })}
                />
                <PortfolioThumbnail
                    imgSrc="images/portfolio/6-in-6/CSS-logo.png"
                    title="Cyber Sale Simulator"
                    onClick={() => onThumbnailClicked({
                        title: "Cyber Sale Simulator",
                        //#region Blurb
                        blurb: "Grab a great game!\nIt's that time of year again - it's time to grab a great deal on some games you'll probably never play! You've saved up all your pennies from the last sale and you're ready to spend your cash on anything that might fly by, but make sure you grab something good, or else you're just wasting money!\nGo! Go! Consumerism!",
                        //#endregion
                        studio: "6-in-6 Team",
                        platform: "PC/Mac",
                        releaseDate: "July 30th 2018",
                        progress: "Complete!",
                        role: "Programmer, Sound Designer",
                        technologies: "Unity, C#",
                        screenshots: "images/portfolio/6-in-6/CSS-logo.png",
                        links: "https://harrishun.itch.io/cyber-sale-simulator",
                        closeOverlay: onOverlayClosed
                    })}
                />
                <PortfolioThumbnail
                    imgSrc="images/portfolio/6-in-6/SS-logo.png"
                    title="Swooping Season"
                    onClick={() => onThumbnailClicked({
                        title: "Swooping Season",
                        //#region Blurb
                        blurb: "The magpies will destroy us all.\nSnakes. Spiders. Sharks. Magpies? \nAustralia, the land down under, is known for it's dangerous flora and fauna. Every year, thousands of potential tourists are repelled from this land at the very thought of a spider crawling up their leg, or a shark attack at one of our beautiful beaches. Little do they know, these animals pale in comparison to the ferociousness of our most dangerous creature: the Australian Magpie.\nEvery year, from August through November, magpies strike fear into the heart of every man, woman and child as they descend from their nests at a piercing rate. Eyes are struck and skulls are penetrated. Those who have not encountered the feathered missiles do not know true terror.\nIn Swooping Season, players must progress from one side of a magpie-infested park to the other, making sure not to be hit in process. There is no defense from these terrifying birds, besides sprinting off in another direction, hoping an exit will see you out of the park in one piece - but be careful, one magpie easily turns into two, three, four and more if unwittingly coax them out...",
                        //#endregion
                        studio: "6-in-6 Team",
                        platform: "PC/Mac",
                        releaseDate: "August 31st 2018",
                        progress: "Complete!",
                        role: "Programmer, Sound Designer, Animation",
                        technologies: "Unity, C#",
                        screenshots: "images/portfolio/6-in-6/SS-logo.png",
                        links: "https://harrishun.itch.io/swooping-season",
                        closeOverlay: onOverlayClosed
                    })}
                />
                <PortfolioThumbnail
                    imgSrc="/images/portfolio/game-jams/IGMFTD.png"
                    title="It Grabbed Me From The Depths!"
                    onClick={() => onThumbnailClicked({
                        title: "It Grabbed Me From The Depths!",
                        blurb: "",
                        studio: "QUT Game Development Club",
                        platform: "Android",
                        releaseDate: "July 14th 2017",
                        progress: "Complete!",
                        role: "Sound Designer, Programmer (Sound Implementation)",
                        technologies: "Unity, C#, FMOD",
                        screenshots: "/images/portfolio/game-jams/IGMFTD.png",
                        links: "https://harrishun.itch.io/swooping-season",
                        closeOverlay: onOverlayClosed
                    })}
                />
                <PortfolioThumbnail
                    imgSrc="/images/portfolio/game-jams/lab-escape.png"
                    title="Lab Escape"
                    onClick={() => onThumbnailClicked({
                        title: "Lab Escape",
                        blurb: "",
                        studio: "QUT Game Development Club",
                        platform: "Android",
                        releaseDate: "December 14th 2017",
                        progress: "Complete!",
                        role: "Sound Designer, Programmer (Sound Implementation)",
                        technologies: "Unity, C#, FMOD",
                        screenshots: "/images/portfolio/game-jams/lab-escape.png",
                        links: "https://harrishun.itch.io/swooping-season",
                        closeOverlay: onOverlayClosed
                    })}
                />
            </div>
        </React.Fragment>
    )
}