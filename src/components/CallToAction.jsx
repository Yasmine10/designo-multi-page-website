import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <section className="call-to-action">
            <div className="container">
                <div className="call-to-action__content">
                    <h2>Let's talk about your project</h2>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <Link to="/contact" className="btn btn--primary">Get in touch</Link>
            </div>
        </section>
    );
}

export default CallToAction;