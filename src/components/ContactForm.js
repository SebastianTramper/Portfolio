import React from 'react';
import { Form } from 'react-bootstrap';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Bedankt ik neem zo spoedig mogelijk contact met u op!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" className="form-control rounded-pill mb-3" name="name" value={name} onChange={this.handleChange} placeholder="Naam" />
                <input type="text" className="form-control rounded-pill mb-3" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
                <textarea className="form-control rounded-3 mb-3" name="message" value={message} onChange={this.handleChange} placeholder="Bericht" />
                <div className="d-grid">
                    <button type="submit" className="btn btn-success rounded-pill">Verzenden</button>
                </div>
            </Form>

        );
    }
}

export default ContactForm;
