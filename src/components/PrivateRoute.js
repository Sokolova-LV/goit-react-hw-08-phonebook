import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "auth/auth-selectors";

export default function PrivateRoute({
    children,
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? (
        <Navigate to="/login" replace />
    ) : (
        <>{children}</>
    );
};
