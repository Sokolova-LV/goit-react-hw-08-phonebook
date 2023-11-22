import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Div = styled.div`
    background-color: #ffffff; 
    padding: 10px;
`;

export const StyledLink = styled(Link)`
    margin-right: 58px;
    text-decoration: none;
    color: #333333; 
    font-weight: bold;
    font-size: 36px;
    transition: color 0.3s ease;

    :hover {
        color: #9b59b6;
    }
`;