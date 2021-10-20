import axios from 'axios';
import React, { useState } from 'react'
import '../../../App.css'
import './Contact.css'
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
    const formId = 'RDu8E3Mo';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchaKey = '6Ldj198cAAAAAJqHKPvEmfMO5bH2w1sVWOAApkI-';
    let recaptchaToken = '';

    const [sender, setSender] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSenderInput = (event) => {
        setSender(event.target.value);
    };

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageInput = (event) => {
        setMessage(event.target.value);
    };

    const handleResponseMessage = (message) => {
        setResponseMessage(message);
    };

    const updateRecaptchaToken = (token) => {
        recaptchaToken = token;
    }

    const resetFields = () => {
        setSender('');
        setEmail('');
        setMessage('');
    }

    const postSubmission = async () => {
        const payload = {
            sender: sender,
            email: email,
            message: message,
            "g-recaptcha-response": recaptchaToken
        };

        window.grecaptcha.reset();

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setResponseMessage('test')
            resetFields();
        } catch (error) {
            setResponseMessage('error')
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await postSubmission();
    }

    return (
        <React.Fragment>
            <h1 id="page-header">CONTACT</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-element">
                        <label htmlFor="sender-input">Name</label>
                        <input type="text" name="sender" value={sender} onChange={handleSenderInput} />
                    </div>

                    <div className="form-element">
                        <label htmlFor="email-input" className="formLabel">Email</label>
                        <input type="text" name="email" value={email} onChange={handleEmailInput} />
                    </div>

                    <div className="form-element">
                        <label htmlFor="message-input">Message</label>
                        <textarea name="message" value={message} onChange={handleMessageInput} />
                    </div>

                    <div className="form-element">
                        <ReCAPTCHA
                            sitekey={recaptchaKey}
                            onChange={updateRecaptchaToken}
                        />
                    </div>

                    <button className="submit-button">Send Message!</button>
                    <div id="response-message">{responseMessage}</div>
                </form>
            </div >
            <div className="info-subtext">
                <p>You can also message me here!</p>
                <ul className="social-ul">
                    <li>
                        <a href="https://www.linkedin.com/in/harrison-short/" className="href" target="_blank">
                            <i className="fab fa-linkedin"></i>LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/HarrisonShort" className="href" target="_blank">
                            <i className="fab fa-github"></i>GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/TheHarrishun" className="href" target="_blank">
                            <i className="fab fa-twitter"></i>Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment >
    )
}