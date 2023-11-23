import { Nav, NavLink } from "./Navigation.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getIsLoggedIn } from "auth/auth-selectors";

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Nav>
            <NavLink to="/">Home</NavLink>
        
            {isLoggedIn && (
                <NavLink to="/contacts">Contacts</NavLink>
            )}
        </Nav>
    );
};

export default Navigation;