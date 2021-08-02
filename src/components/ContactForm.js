import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    Name: Yup.string()
        .required('Hoe heet u?'),
    Email: Yup.string()
        .required('Wat is uw email-adres?')
        .email('Email-adres ongeldig'),
    Message: Yup.string().required('Hoe kan ik u helpen?'),
});

function ContactForm() {
    return (
        <Formik 
            initialValues={{
                Name: '',
                Message: '',
                Email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form method="POST" action="#">
                    <Field className="form-control rounded-pill mb-3" name="Name" placeholder="Naam" />
                    {errors.Name && touched.Name ? (
                        <div className="alert alert-primary">{errors.Name}</div>
                    ) : null}
                    <Field className="form-control rounded-pill mb-3" name="Email" placeholder="Email" />
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
