import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "auth/auth-operations";

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Login page</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </label>
                <label>
                    Password
                    <input type="text" name="password" value={password} onChange={handleChange} />
                </label>
            </form>
        </div>
    );
};