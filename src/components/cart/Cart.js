import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../cartItem/CartItem";

function Cart({ onClose }) {
    return (
        <div className="Cart">
            <div className="overlay" onClick={onClose}></div>
            <div className="cart-content">
                <div className="header">
                    <h3>Shopping Cart</h3>
                    <div className="close-btn" onClick={onClose}>
                        <AiOutlineClose /> Close
                    </div>
                </div>
                <div className="cart-items">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="checkout-info">
                    <div className="total-amount">
                        <h3 className="total-message">Total:</h3>
                        <h3 className="total-value">₹ 4529</h3>
                    </div>
                    <div className="checkout btn-primary">Checkout now</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
