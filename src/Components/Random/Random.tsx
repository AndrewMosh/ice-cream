import RANDOMICECREAMS from "../../utils/ICECREAMS";
import "./Random.scss";
import Button from "../Button/Button";

const Random = () => {
    let random: number = Math.floor(Math.random() * 3);
    let iceCream = RANDOMICECREAMS[random];

    return (
        <section className="random">
            <div className="random__container container">
                <div className="random__wrapper">
                    <div className="random__inner">
                        <div className="random__title">{iceCream.title}</div>
                        <p className="random__text">{iceCream.text}</p>
                        <Button label="see details" />
                    </div>
                    <div className="random__inner">
                        <img className="random__image" src={iceCream.img} alt={iceCream.title} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Random;
