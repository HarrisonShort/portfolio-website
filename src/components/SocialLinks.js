import React from 'react'
import './SocialLinks.css'

export default function SocialLinks(props) {
    return (
        <React.Fragment>
            <div className="info-subtext">
                <p>{props.message}</p>
                <ul className="social-ul">
                    <li>
                        <a href="https://www.linkedin.com/in/harrison-short/" className="href" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/HarrisonShort" className="href" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/TheHarrishun" className="href" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}