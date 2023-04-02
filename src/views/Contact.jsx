import { useState } from "react";

import Locations from "../components/Locations.jsx";

function Contact(props) {

    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [ formErrors, setFormErrors ] = useState({});

    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const formValidation = () => {
        const emptyErrorMessage = "Can't be empty!";
        const emailFormatErrorMessage = "Must be a valid email address!";

        const errors = {};
        let valid = true;

        if (!formData.name) {
            errors.name = emptyErrorMessage;
            valid = false;
        }

        if (!formData.email) {
            errors.email = emptyErrorMessage;
            valid = false;
        } else if (!isEmail(formData.email)) {
            errors.email = emailFormatErrorMessage;
            valid = false;
        }

        if (!formData.phone) {
            errors.phone = emptyErrorMessage;
            valid = false;
        }

        if (!formData.message) {
            errors.message = emptyErrorMessage;
            valid = false;
        }

        setFormErrors(errors);

        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = formValidation();

        if (valid) {
            alert("Thanks for filling in the form!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        }
    }

    return (
        <main id="main" className="main">
            <section className="contact-intro-form | container--full-mobile bg-primary-400 txt-primary-100 spacing-l">
                <div className="contact-intro-form__intro">
                    <h1 className="title | h1">Contact us</h1>
                    <p className="text">Ready to take it to the next level? Let’s talk about your project or idea and find out how we
                        can help your business grow. If you are looking for unique digital experiences that’s relatable
                        to your users, drop us a line.</p>
                </div>
                <div className="contact-intro-form__form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="contact-form__name" className="sr-only">Name</label>
                            <input type="text" id="contact-form__name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                            <small className={"input-error" + (formErrors.name ? " invalid" : "")}>{formErrors.name}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-form__email" className="sr-only">Email Address</label>
                            <input type="email" id="contact-form__email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                            <small className={"input-error" + (formErrors.email ? " invalid" : "")}>{formErrors.email}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-form__phone" className="sr-only">Phone</label>
                            <input type="text" id="contact-form__phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                            <small className={"input-error" + (formErrors.phone ? " invalid" : "")}>{formErrors.phone}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-form__message" className="sr-only">Your message</label>
                            <textarea id="contact-form__message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange} />
                            <small className={"input-error" + (formErrors.message ? " invalid" : "")}>{formErrors.message}</small>
                        </div>
                        <button type="submit" className="contact-form__btn | btn btn--primary" formNoValidate={true}>Submit</button>
                    </form>
                </div>
            </section>

            <Locations />
        </main>
    );
}

export default Contact;