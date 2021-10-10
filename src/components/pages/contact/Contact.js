import React from 'react'
import '../../../App.css'
import './Contact.css'

export default function Contact() {

    const submitForm = () => { };

    return (
        <React.Fragment>
            <h1 id="page-header">CONTACT</h1>
            <div div className="page-container">
                <div className="form-container">
                    <form className="contact-form" onSubmit={submitForm}>
                        <div className="form-element">
                            <label htmlFor="name-input">Name</label>
                            <input type="text" id="name-input"></input>
                        </div>

                        <div className="form-element">
                            <label htmlFor="email-input" className="formLabel">Email</label>
                            <input type="text" id="email-input"></input>
                        </div>

                        <div className="form-element">
                            <label for="message-input">Message</label>
                            <textarea id="message-input"></textarea>
                        </div>

                        <div className="form-element">
                            <button className="submit-button">Send Message!</button>
                        </div>
                    </form>
                </div>

                {/* <div className="info-subtext">
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

                </div> */}
            </div>

        </React.Fragment>

    )
}