import {useContext} from 'react'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => {
  // Extract cartList directly using the useContext hook
    const {cartList} = useContext(CartContext)

    return (
        <ul className="cart-list">
        {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
        ))}
        </ul>
    )
}

export default CartListView