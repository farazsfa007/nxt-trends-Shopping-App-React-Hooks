import {useContext} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => {
  // Access context values using the useContext hook
    const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
    } = useContext(CartContext)

    const {cartItemDetails} = props
    const {id, title, brand, quantity, price, imageUrl} = cartItemDetails

    const onRemoveCartItem = () => {
        removeCartItem(id)
    }

    const onClickDecrement = () => {
        decrementCartItemQuantity(id)
    }

    const onClickIncrement = () => {
        incrementCartItemQuantity(id)
    }

    return (
        <li className="cart-item">
        <img className="cart-product-image" src={imageUrl} alt={title} />
        <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
            <p className="cart-product-title">{title}</p>
            <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
            <button
                data-testid="minus"
                onClick={onClickDecrement}
                type="button"
                className="quantity-controller-button"
            >
                <BsDashSquare color="#52606D" size={12} />
            </button>
            <p className="cart-quantity">{quantity}</p>
            <button
                data-testid="plus"
                onClick={onClickIncrement}
                type="button"
                className="quantity-controller-button"
            >
                <BsPlusSquare color="#52606D" size={12} />
            </button>
            </div>
            <div className="total-price-remove-container">
            <p className="cart-total-price">Rs {price * quantity}/-</p>
            <button
                data-testid="remove"
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
            >
                Remove
            </button>
            </div>
        </div>

        <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
        >
            <AiFillCloseCircle color="#616E7C" size={20} />
        </button>
        </li>
    )
}

export default CartItem