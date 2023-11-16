import { useSelector } from "react-redux"
import { Route, redirect } from "react-router-dom"
import { getIsLoggedIn } from "auth/auth-selectors";

export default function PrivateRoute({ children, ...routeProps }) {
    const isLoggedIn = useSelector(getIsLoggedIn)
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : redirect("/login")}
        </Route>
    ); 
};