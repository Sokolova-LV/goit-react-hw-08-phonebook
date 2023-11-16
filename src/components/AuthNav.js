import { Link } from "react-router-dom"

export default function AuthNav() {
    return (
        <div>
            <Link to="/register" exact>Register</Link>

            <Link to="/login exact">Login</Link>
        </div>
    );
};