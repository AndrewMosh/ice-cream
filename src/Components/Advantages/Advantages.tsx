import PLUSES from "../../utils/PLUSES";
import "./Advantages.scss";
import PopUp from "../../animations/PopUp";

const Advantages = () => {
    return (
        <section className="advantages" id="advantages">
            <div className="advantages__container container">
                <PopUp
                    side="right"
                    element={
                        <div className="advantages__wrapper">
                            {PLUSES.map((plus) => (
                                <div key={plus.id} className="advantages__inner">
                                    <img className="advantages__image" src={plus.img} alt={plus.title} />
                                    <div className="advantages__title">{plus.title}</div>
                                    <p className="advantages__text">{plus.text}</p>
                                </div>
                            ))}
                        </div>
                    }
                />
            </div>
        </section>
    );
};

export default Advantages;
