import React from 'react'
import SocialLinks from '../../SocialLinks'
import './PersonalInfoSection.css'

export default function PersonalInfoSection() {
    return (
        <React.Fragment>
            <section id="personal">
                <div className="info-container">
                    <div className="info-container-left">
                        <div className="info-blurb">
                            Hi there, I'm Harrison Short, a software developer based in Brisbane, Australia.
                            <br></br>
                            <br></br>
                            I have over three years of professional Unity development experience, with a key interest in the Augmented Reality and location-based software realm.
                            <br></br>
                            <br></br>
                            Currently I'm working at Ardacious, makers of Ardent Roleplay, the world's first Augmented Reality app for Tabletop Roleplaying games.
                        </div>
                        <SocialLinks
                            message="You can connect with me here!" />
                    </div>
                    <div className="info-container-right">
                        <img src="/images/harrison_okunoshima.jpg" alt="Harrison Okunoshima" className="info-image" />
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}
