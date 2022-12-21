import React from "react";
import { useDispatch } from "react-redux";
import { decriment, incriment } from "../../../redux/cart";

import "./CartButtons.css";


const AfterCart = ({ cartCount, productId }) => {
    const dispatch = useDispatch()

    return (
        <div className="after-cart">
            <button className="cart-counter-button" onClick={() => dispatch(decriment(productId))}>
                -
            </button>
            <div className="cart-count">{cartCount}</div>
            <button className="cart-counter-button" onClick={() => dispatch(incriment(productId))}>
                +
            </button>
        </div>
    );
};

export default AfterCart;