import {useContext} from 'react'
import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => {
  // Accessing values from CartContext cleanly using hook
    const {cartList, removeAllCartItems} = useContext(CartContext)
    
    const showEmptyView = cartList.length === 0

    const onClickRemoveBtn = () => {
        removeAllCartItems()
    }

    return (
        <>
        <Header />
        <div className="cart-container">
            {showEmptyView ? (
            <EmptyCartView />
            ) : (
            <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                onClick={onClickRemoveBtn}
                type="button"
                className="remove-btn"
                >
                Remove All
                </button>
                <CartListView />
                <CartSummary />
            </div>
            )}
        </div>
        </>
    )
}

export default Cart