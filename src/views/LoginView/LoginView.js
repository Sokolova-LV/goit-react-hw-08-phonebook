import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "auth/auth-operations";
import { Div, Title, Form, Label, Input, Button } from "./LoginView.styled";

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
        <Div> 
            <Title>Welcome back!</Title>

            <Form onSubmit={handleSubmit}>
                <Label>
                    Email
                    <Input type="email" name="email" value={email} onChange={handleChange} />
                </Label>
                <Label>
                    Password
                    <Input type="password" name="password" value={password} onChange={handleChange} />
                </Label>
                <Button type="submit">Log In</Button>
            </Form>
        </Div>
    );
};