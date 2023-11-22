import { useSelector } from "react-redux";
import Navigation from "components/Navigation/Navigation";
import { getIsLoggedIn } from "auth/auth-selectors";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { Header } from "./AppBar.styled";

export default function AppBar() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};