import React, { useState } from "react";
import AfterCart from "./CartButtons/AfterCart";
import BeforeCart from "./CartButtons/BeforeCart";
import products from '../../api/products.json'
import { useSelector } from "react-redux";
import "./ProductList.css";
import CartButtons from "./CartButtons";

const ProductList = () => {
    const { cartList } = useSelector((state) => state.cart)

    return (
        <section className="container">
            {products?.map((product, key) => (
                <div className="product-container" key={key}>
                    <img src={product?.image} alt="" />
                    <h3>{product?.title}</h3>
                    <CartButtons product={product} />
                </div>
            ))}
        </section>
    );
};

export default ProductList;