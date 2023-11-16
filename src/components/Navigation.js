import { Link } from "react-router-dom"

const Navigation = () => (
    <nav>
        <Link to="/" exact>Home</Link>
        
        <Link to="/contacts" exact>Contacts</Link>
    </nav>
);

export default Navigation;