import Slider from "../Slider/Slider";
import icecream from "../../assets/images/icecream.png";
import "./Testimonials.scss";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonials__wrapper">
                <Slider />
                <div className="testimonials__inner">
                    <img className="testimonials__image" src={icecream} alt="ice-cream" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
