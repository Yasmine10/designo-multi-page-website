import Locations from "../components/Locations.jsx";

function Contact(props) {
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
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="contact-form__name" className="sr-only">Name</label>
                            <input type="text" id="contact-form__name" name="name" placeholder="Name"/>
                            <small className="input-error">This can't be empty!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-form__email" className="sr-only">Email Address</label>
                            <input type="email" id="contact-form__email" name="email" placeholder="Email Address"/>
                            <small className="input-error"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-form__phone" className="sr-only">Phone</label>
                            <input type="text" id="contact-form__phone" name="phone" placeholder="Phone"/>
                            <small className="input-error"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-form__message" className="sr-only">Your message</label>
                            <textarea id="contact-form__message" name="message" rows="4" placeholder="Your message" />
                        </div>
                        <button type="submit" className="contact-form__btn | btn btn--primary">Submit</button>
                    </form>
                </div>
            </section>

            <Locations />
        </main>
    );
}

export default Contact;