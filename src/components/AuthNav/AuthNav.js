import { Div, StyledLink } from "./AuthNav.styled";

export default function AuthNav() {
    return (
        <Div>
            <StyledLink to="/register">Register</StyledLink>

            <StyledLink to="/login">Login</StyledLink>
        </Div>
    );
};