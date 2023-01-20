import React from 'react'
import './Cart.scss'

function Cart({onClose}) {
  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="btn-primary" onClick={onClose}>Close</div>
      </div>
    </div>
  )
}

export default Cart