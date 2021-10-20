import React from 'react'
import '../home/PersonalInfoSection.css'

export default function PersonalInfoSection() {
    return (
        <React.Fragment>
            <section id="personal">
                <div className="info-container">
                    <div className="info-container-left">
                        <div className="info-blurb">
                            Hi there, my name is Harrison Short. I'm a software developer based in Brisbane, Australia.
                        </div>
                        <div className="info-subtext">
                            <p>You can connect with me here!</p>
                            <br></br>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/harrison-short/" className="href" target="_blank">
                                        <i class="fab fa-linkedin"></i>LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/HarrisonShort" className="href" target="_blank">
                                        <i class="fab fa-github"></i>GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/TheHarrishun" className="href" target="_blank">
                                        <i class="fab fa-twitter"></i>Twitter
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="info-container-right">
                        <img src="/images/harrison_okunoshima.jpg" alt="Harrison Okunoshima" className="info-image" />
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}
