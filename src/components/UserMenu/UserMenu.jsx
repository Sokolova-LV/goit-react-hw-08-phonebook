import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "auth/auth-selectors";
import { logOut } from "auth/auth-operations";
import { Div, Text, Button } from "./UserMenu.styled";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);

    return (
        <Div>
            <Text>Hi, {name}!</Text>
            <Button type="button" onClick={() => dispatch(logOut())}>Log out</Button>
        </Div>
        
    );
};