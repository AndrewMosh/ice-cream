import PRODUCTS from "../../utils/PRODUCTS";
import { useState } from "react";
import Button from "../Button/Button";
import "./Products.scss";

const Products = () => {
    const [tab, setTab] = useState(PRODUCTS["ice cream"]);
    const [active, setActive] = useState("ice cream");

    return (
        <section className="products">
            <div className="products__container container">
                <div className="products__wrapper">
                    <h1 className="products__heading">Our Products</h1>
                    <ul className="products__tabs">
                        {Object.keys(PRODUCTS).map((el) => (
                            <li
                                className={el == active ? "products__tab active" : "products__tab"}
                                onClick={() => {
                                    setTab(PRODUCTS[el as keyof typeof PRODUCTS]);
                                    setActive(el as keyof typeof PRODUCTS);
                                }}
                                key={el}
                            >
                                {el}
                            </li>
                        ))}
                    </ul>

                    <div className="products__all">
                        {tab.map((el, index) => (
                            <div className="products__content" key={el.title}>
                                <div className={index === 1 ? "products__image right" : "products__image"}>
                                    <img src={el.img} alt={el.title} />
                                </div>
                                <div className="products__info">
                                    <div className="products__title">{el.title}</div>
                                    <p className="products__text">{el.text}</p>
                                    <div className="products__price">
                                        ${el.price} <span className="products__oldprice">{el.oldprice}</span>{" "}
                                    </div>
                                    <Button label="buy now" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
