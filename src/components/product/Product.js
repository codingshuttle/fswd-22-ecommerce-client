import React from "react";
import { useNavigate } from "react-router";
import './Product.scss'

function Product({product}) {
    const navigate = useNavigate();

    return (
        <div className="Product" onClick={() => navigate(`/products/${product?.attributes.key}`)}>
            <div className="product-container">
                <div className="product-img">
                    <div className="img-container">
                        <img src={product?.attributes.image?.data.attributes.url} alt={product?.attributes.title} id="img"/>
                    </div>
                </div>
                <div className="product-info">
                    <p className="title">
                        {product?.attributes.title}
                    </p>
                    <p className="price">₹ {product?.attributes.price}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
