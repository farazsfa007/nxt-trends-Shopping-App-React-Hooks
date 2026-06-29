import {useContext} from 'react'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  // Extract cartList directly using the useContext hook
    const {cartList} = useContext(CartContext)

    // Calculate the total price cleanly using Array.reduce
    const total = cartList.reduce(
        (acc, eachCartItem) => acc + eachCartItem.price * eachCartItem.quantity,
        0,
    )

    return (
        <>
        <div className="cart-summary-container">
            <h1 className="order-total-value">
            <span className="order-total-label">Order Total:</span> Rs {total}
            /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button d-sm-none">
            Checkout
            </button>
        </div>
        <button type="button" className="checkout-button d-lg-none">
            Checkout
        </button>
        </>
    )
}

export default CartSummary