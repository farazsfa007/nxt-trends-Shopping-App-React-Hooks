import {Navigate, Outlet} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = () => {
    const token = Cookie.get('jwt_token')

    // If no token exists, redirect the user to the login screen
    if (token === undefined) {
        return <Navigate to="/login" replace />
    }

    // Outlet automatically renders the child route elements configured in App.js
    return <Outlet />
}

export default ProtectedRoute