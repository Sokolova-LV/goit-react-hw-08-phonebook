import styled from "@emotion/styled";

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Text = styled.p`
    font-size: 36px;
`;

export const Button = styled.button`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 15px;
    color: #ffffff;
    background-color: #000000;
    border: none;
    border-radius: 14px;
    cursor: pointer;

    :hover,
    :focus {
        background-color: #9b59b6;
        transition: 0.3s ease;
    }
`;
