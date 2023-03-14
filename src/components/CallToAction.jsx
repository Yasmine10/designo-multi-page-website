import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <section className="call-to-action">
            <div className="container bg-primary-400 txt-primary-100">
                <div className="call-to-action__content">
                    <h2 className="h2">Let's talk about your project</h2>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <Link to="/contact" className="call-to-action__btn | btn btn--primary">Get in touch</Link>
            </div>
        </section>
    );
}

export default CallToAction;