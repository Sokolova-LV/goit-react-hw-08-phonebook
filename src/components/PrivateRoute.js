import authSelectors from "auth/auth-selectors"
import { useSelector } from "react-redux"
import { Route } from "react-router-dom"

export default function PrivateRoute({ children, ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors)
    return <Route {...routeProps}>{children}</Route>
};