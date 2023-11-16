import { Link } from "react-router-dom"

const Navigation = () => (
    <nav>
        <Link to="/" exact>Main</Link>

        <Link to="/contacts" exact>Contacts</Link>
    </nav>
);

export default Navigation;