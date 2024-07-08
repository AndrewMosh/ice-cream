import "./ContactUs.scss";
import Button from "../Button/Button";

const ContactUs = () => {
    return (
        <section className="contact">
            <div className="contact__container container">
                <div className="contact__wrapper">
                    <div className="contact__title">
                        Have Question in Mind?
                        <br />
                        Let us help you{" "}
                    </div>
                    <form className="contact__form" action="">
                        <input className="contact__input" type="text" placeholder="Enter your question" />
                        <Button label="send" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
