import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "auth/auth-selectors";

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;

