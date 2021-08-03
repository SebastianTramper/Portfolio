import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik"

function ContactForm() {
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const initialValues = {
        name: "",
        email: "",
        message: ""
    }

    const validate = values => {
        let errors = {}

        if(!values.name) {
            errors.name = "Please type your name"
        }

        if(!values.email) {
            errors.email = "Please type your email"
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Please type a valid email"
        }
        

        return errors
    }

    const onSubmit = (values, submitProps) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
          })
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.status)
                } else if(response.ok) {
                    alert("Success!")
                    submitProps.resetForm()
                } else {
                    alert("Something went wrong!")
                }

                return response
            })
            .catch(error => alert(error));
    }

    return (
        <Formik 
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form   >
                    <input type="hidden" name="form-name" value="contact" />
                    <Field className="form-control rounded-pill mb-3" name="name" placeholder="Naam" />
                    {errors.Name && touched.Name ? (
                        <div className="alert alert-primary">{errors.Name}</div>
                    ) : null}
                    <Field className="form-control rounded-pill mb-3" name="email" placeholder="Email" />
                    {errors.Email && touched.Email ? (
                        <div className="alert alert-primary">{errors.Email}</div>
                    ) : null}
                    <Field className="form-control rounded-3 mb-3" name="Message" type="text" placeholder="Bericht" component="textarea" />
                    {errors.Message && touched.Message ? <div className="alert alert-primary">{errors.Message}</div> : null}
                    <div className="d-grid">
                        <button type="submit" className="btn btn-success rounded-pill">Verzenden</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}


export default ContactForm;
