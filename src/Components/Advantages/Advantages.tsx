import PLUSES from "../../utils/PLUSES";
import './Advantages.scss'

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages__container container">
                <div className="advantages__wrapper">
                    {PLUSES.map(plus => <div className="advantages__inner">
                        <img className="advantages__image" src={plus.img} alt={plus.title} />
                        <div className="advantages__title">{plus.title}</div>
                        <p className="advantages__text">{plus.text}</p>
                    </div>)}
                </div>
            </div>
        </section>
    )
}


export default Advantages


