import axios from 'axios';
import React, { useState } from 'react'
import '../../../App.css'
import './Contact.css'
import ReCAPTCHA from 'react-google-recaptcha';
import SocialLinks from '../../SocialLinks';

export default function Contact() {
    document.title = 'Harrison Short - Contact';

    // TODO: Investigate obscuring keys. https://www.pluralsight.com/guides/hiding-secret-keys-in-create-react-app
    // DEV
    //const formId = 'RDu8E3Mo';
    //const recaptchaKey = '6Ldj198cAAAAAJqHKPvEmfMO5bH2w1sVWOAApkI-';

    // PROD
    const formId = 'H0rbucax';
    const recaptchaKey = '6LeIJl0dAAAAAGPMkJEBd1CrOJjnllQ9A75iCb-h';

    const formSparkUrl = `https://submit-form.com/${formId}`;

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

    const setSuccessResponseMessage = (messageText) => {
        setResponseMessage({
            message: messageText,
            className: 'response-message-successful'
        })
    }

    const setErrorResponseMessage = (messageText) => {
        setResponseMessage({
            message: messageText,
            className: 'response-message-error'
        })
    }

    const updateRecaptchaToken = (token) => {
        recaptchaToken = token;
    }

    const resetFields = () => {
        setSender('');
        setEmail('');
        setMessage('');
    }

    const validateFields = () => {
        if (sender.length <= 0) {
            setErrorResponseMessage('Please let me know your name!');
            return false;
        }

        if (email.length <= 0) {
            setErrorResponseMessage('Please let me know your email!');
            return false;
        }

        if (!email.includes("@")) {
            setErrorResponseMessage("Your email doesn't look quite right...");
            return false;
        }

        if (message.length <= 0) {
            setErrorResponseMessage('Please add a message!');
            return false;
        }

        return true;
    }

    const postSubmission = async () => {
        const payload = {
            sender: sender,
            email: email,
            message: message,
            "g-recaptcha-response": recaptchaToken
        };

        if (validateFields()) {
            setResponseMessage(null);
            window.grecaptcha.reset();

            try {
                const result = await axios.post(formSparkUrl, payload);
                setResponseMessage({
                    message: "Message received! I'll be in touch shortly!",
                    className: 'response-message-successful'
                })
                resetFields();
            } catch (error) {
                setResponseMessage({
                    message: 'There was an error during sending. If issues continue, try messaging me at one of the social links below.',
                    className: 'response-message-error'
                });
                console.log(formSparkUrl);
                console.log(error);
            }
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
                    {responseMessage && (<p className={responseMessage.className}>{responseMessage.message}</p>)}
                </form>
            </div>
            <SocialLinks
                message="You can also message me here!" />
        </React.Fragment >
    )
}