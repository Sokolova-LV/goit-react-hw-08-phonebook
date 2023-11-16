import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "auth/auth-selectors";
import { logOut } from "auth/auth-operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail);

    return (
        <div>
            <p>{email}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    );
};