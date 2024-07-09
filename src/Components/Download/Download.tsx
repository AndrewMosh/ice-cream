import "./Download.scss";
import app from "../../assets/images/app.png";
import select from "../../assets/svg/select.svg";
import add from "../../assets/svg/add.svg";
import order from "../../assets/svg/order.svg";
import google from "../../assets/svg/google.svg";
import apple from "../../assets/svg/apple.svg";
import PopUp from "../../animations/PopUp";

const Download = () => {
    return (
        <div className="download">
            <div className="download__container container">
                <div className="download__wrapper">
                    <div className="download__image">
                        <img src={app} alt="app" />
                    </div>
                    <div className="download__content">
                        <div className="download__title">Simple Way To Order Your Food</div>
                        <div className="download__text">
                            Some food has looked so awful that it's looked like something that the dog's brought home, yet after one
                            mouthful I've been left eating my thoughts.
                        </div>
                        <div className="download__stages">
                            <div className="download__stage">
                                <img src={select} alt="select" />
                                <div>Select Your Food</div>
                            </div>
                            <div className="download__stage">
                                <img src={add} alt="add" />
                                <div> Add To Cart</div>
                            </div>
                            <div className="download__stage">
                                <img src={order} alt="order" />
                                <div> Order Your Food</div>
                            </div>
                        </div>
                        <div className="download__sources">
                            <img src={google} alt="google" />
                            <img src={apple} alt="apple" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
