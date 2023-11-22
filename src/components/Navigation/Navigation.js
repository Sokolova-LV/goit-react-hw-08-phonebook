import { Nav, NavLink } from "./Navigation.styled";

const Navigation = () => (
    <Nav>
        <NavLink to="/">Home</NavLink>
        
        <NavLink to="/contacts">Contacts</NavLink>
    </Nav>
);

export default Navigation;