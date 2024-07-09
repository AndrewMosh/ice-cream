import SLIDER from "../../utils/SLIDER";
import "./Slider.scss";
import quote from "../../assets/svg/quote.svg";
import unquote from "../../assets/svg/unquote.svg";
import next from "../../assets/svg/next.svg";
import prev from "../../assets/svg/prev.svg";
import { useState } from "react";
import useAnimation from "../../animations/Fade";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, startAnimation] = useAnimation();

    const handlePrev = () => {
        startAnimation();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? SLIDER.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        startAnimation();
        setCurrentIndex((prevIndex) => (prevIndex === SLIDER.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slider">
            <div className="slider__wrapper">
                <div className={`slider__full ${isAnimating ? "fade" : "slider__full"}`}>
                    <div className="slider__header">
                        <img src={SLIDER[currentIndex].img} alt={SLIDER[currentIndex].name} />
                        <div className="slider__name-container">
                            <div className="slider__name">{SLIDER[currentIndex].name}</div>
                            <div className="slider__company">{SLIDER[currentIndex].company}</div>
                        </div>
                    </div>
                    <div className="slider__text">
                        <div style={{ position: "relative" }}>
                            <img className="slider__quote" src={quote} alt="quote" />
                            {SLIDER[currentIndex].text}
                            <img className="slider__unquote" src={unquote} alt="unquote" />
                        </div>
                    </div>
                </div>
                <div className="slider__images">
                    <button className="slider__prev" onClick={handlePrev}>
                        <img src={prev} alt="prev" />
                    </button>

                    {[
                        SLIDER[currentIndex - 1] || SLIDER[SLIDER.length - 1],
                        SLIDER[currentIndex],
                        SLIDER[currentIndex + 1] || SLIDER[0],
                    ].map((slide, index) => (
                        <img
                            src={slide.img}
                            alt={slide.name}
                            key={slide.id}
                            className={`slider__image ${index === 1 ? "activePic" : ""}`}
                        />
                    ))}

                    <button className="slider__next" onClick={handleNext}>
                        <img src={next} alt="next" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
