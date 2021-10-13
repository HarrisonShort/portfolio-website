import axios from 'axios';
import React from 'react'
import '../../../App.css'
import './Contact.css'

const formId = 'RDu8E3Mo';
const formSparkUrl = `https://submit-form.com/${formId}`;

async function postSubmission() {
    const payload = {
        message: 'Test formspark submission',
    };

    try {
        //const result = await axios.post(formSparkUrl, payload);
        //console.log(result);
    } catch (error) {
        console.log(error);
    }
};

async function submitForm() {
    event.preventDefault();
    await postSubmission();
};

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: '',
            email: '',
            message: ''
        };

        console.log(this.state.sender);
        console.log(this.state.email);
        console.log(this.state.message);

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {


        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.state);
    };

    render() {
        return (
            <React.Fragment>
                <h1 id="page-header">CONTACT</h1>
                <div className="form-container">
                    <form onSubmit={submitForm}>
                        <div className="form-element">
                            <label htmlFor="sender-input">Name</label>
                            <input type="text" name="sender" value={this.state.sender} onChange={this.handleChange} />
                        </div>

                        <div className="form-element">
                            <label htmlFor="email-input" className="formLabel">Email</label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="form-element">
                            <label htmlFor="message-input">Message</label>
                            <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                        </div>

                        <button className="submit-button">Send Message!</button>
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
}