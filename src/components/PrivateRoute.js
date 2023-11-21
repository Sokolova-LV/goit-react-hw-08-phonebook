import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { getIsFetchingCurrent, getIsLoggedIn } from "auth/auth-selectors";

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isFetchingCurrent = useSelector(getIsFetchingCurrent);
    
    const shouldRedirect = !isLoggedIn && !isFetchingCurrent;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
