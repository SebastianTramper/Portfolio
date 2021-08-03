import React from 'react';
import { Form } from 'react-bootstrap';

function ContactForm() {

    return (
        <Form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" className="form-control rounded-pill mb-3" name="name" placeholder="Naam" />
            <input type="text" className="form-control rounded-pill mb-3" name="email" placeholder="Email" />
            <textarea className="form-control rounded-3 mb-3" name="Message" type="text" placeholder="Bericht" />
            <div className="d-grid">
                <button type="submit" className="btn btn-success rounded-pill">Verzenden</button>
            </div>
        </Form>
    );
}


export default ContactForm;
