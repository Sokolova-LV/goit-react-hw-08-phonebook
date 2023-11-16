import { getIsLoggedIn } from "auth/auth-selectors";
import { useSelector } from "react-redux";
import { Route, redirect } from "react-router-dom";

export default function PublicRoute({
    children,
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? redirect("/") : children}
        </Route>
    );
};