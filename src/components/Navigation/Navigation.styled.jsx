import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #333333; 
  padding: 10px;
`;

export const NavLink = styled(Link)`
    margin-right: 20px;
    text-decoration: none;
    color: #ffffff; 
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;

    :hover {
        color: #9b59b6;
    }
`;