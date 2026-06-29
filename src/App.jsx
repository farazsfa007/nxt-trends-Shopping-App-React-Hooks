import {useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

const App = () => {
    const [cartList, setCartList] = useState([])

    const removeAllCartItems = () => {
        setCartList([])
    }

    const incrementCartItemQuantity = id => {
        setCartList(prevCartList =>
        prevCartList.map(eachCartItem => {
            if (id === eachCartItem.id) {
            return {...eachCartItem, quantity: eachCartItem.quantity + 1}
            }
            return eachCartItem
        }),
        )
    }

    const removeCartItem = id => {
        setCartList(prevCartList =>
        prevCartList.filter(eachCartItem => eachCartItem.id !== id),
        )
    }

    const decrementCartItemQuantity = id => {
        setCartList(prevCartList => {
        const productObject = prevCartList.find(eachCartItem => eachCartItem.id === id)
        
        if (productObject && productObject.quantity > 1) {
            return prevCartList.map(eachCartItem => {
            if (id === eachCartItem.id) {
                return {...eachCartItem, quantity: eachCartItem.quantity - 1}
            }
            return eachCartItem
            })
        }
        
        // If quantity falls below 1, remove item from the cart list
        return prevCartList.filter(eachCartItem => eachCartItem.id !== id)
        })
    }

    const addCartItem = product => {
        setCartList(prevCartList => {
        const productObject = prevCartList.find(
            eachCartItem => eachCartItem.id === product.id,
        )

        if (productObject) {
            return prevCartList.map(eachCartItem => {
            if (productObject.id === eachCartItem.id) {
                return {
                ...eachCartItem,
                quantity: eachCartItem.quantity + product.quantity,
                }
            }
            return eachCartItem
            })
        }

        return [...prevCartList, product]
        })
    }

    return (
        <CartContext.Provider
        value={{
            cartList,
            addCartItem,
            removeCartItem,
            incrementCartItemQuantity,
            decrementCartItemQuantity,
            removeAllCartItems,
        }}
        >
        <BrowserRouter>
            <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginForm />} />
            
            {/* Authenticated / Shielded Layout Routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductItemDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Route>

            {/* Missing Resource Redirects & Error Boundaries */}
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>
        </BrowserRouter>
        </CartContext.Provider>
    )
}

export default App