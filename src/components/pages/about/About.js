import React from 'react'
import '../../../App.css'
import './About.css'

export default function About() {
    return (
        <React.Fragment>
            <h1 id="page-header">ABOUT</h1>
            <section id="personal">
                <div className="info-container">
                    <div className="info-container-left">
                        <div className="info-blurb">
                            Harrison Short is a software developer based in Brisbane, Australia. Born in Auckland, New Zealand, he spent his early life between his birthplace and Hong Kong, before his family settled in Australia. Throughout his schooling, video-games and music dominated Harrison’s spare time, leading Harrison to commence a Bachelor of Games and Interactive Entertainment at the Queensland University of Technology, in pursuit of a career in game development. At the end of 2016, Harrison graduated this course with Distinction, and enjoyed success through his capstone project Bees Won’t Exist, which appeared at GCAP 2016.
                        </div>
                    </div>
                    <div className="info-container-right">
                        <img src="/images/harrison_okunoshima.jpg" alt="Harrison Okunoshima" className="info-image" />
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-container-left">
                        <div className="info-blurb">
                            As an independent game developer, Harrison operated under the name Red Chung, which was derived from two of Harrison's three middles names. The moniker served as a calling card for all things creative Harrison did, and Harrison released a few small games under this name before being hired at his first software development company in 2018.
                        </div>
                    </div>
                    <div className="info-container-right">
                        <img src="/favicon.png" alt="RedChung" className="info-image" />
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-container-left">
                        <div className="info-blurb">
                            In 2018, Harrison joined District Technologies, as a junior Software Developer. This allowed Harrison to further his skills and experience as a programmer, as well as participate in the large scale events space (Harrison attended District Race Hong Kong 2019 as on-site technical support staff).
                            <br></br>
                            <br></br>
                            In addition, this kick-started an interest in Augmented Reality and location-based technologies for Harrison.
                        </div>
                    </div>
                    <div className="info-container-right">
                        <img src="/images/district.jpg" alt="district" className="info-image" />
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-container-left">
                        <div className="info-blurb">
                            Currently, Harrison is enjoying a Software Developer role at Ardacious, working on their flagship product Ardent Roleplay, the world's first Augmented Reality app for Tabletop Roleplaying games.
                            <br></br>
                            <br></br>
                            The role has allowed Harrison to spread his programming wings even further, expanding into backend and web development roles where necessary, on top of bolstering skills with the Unity game engine.
                            <br></br>
                            <br></br>
                            For more on Ardent Roleplay, click <a href="https://www.ardentroleplay.com" target="_blank">here</a>.
                        </div>
                    </div>
                    <div className="info-container-right">
                        <img src="/images/ardacious.png" alt="ardacious" className="info-image" />
                    </div>
                </div>
            </section>
            <p className="cv-text"><b>CV available upon request.</b></p>
        </React.Fragment>
    )
}