import styled from '@emotion/styled';

export const Div = styled.div`
    max-width: 400px;
    margin: 40px auto;
    background-color: #ffffff; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 36px;
`;

export const Form = styled.form`
    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #9b59b6; 
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    font-size: 20px;
    background-color: #9b59b6; 
    color: #ffffff; 
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        background-color: #000000;
        transition: 0.3s ease;
    }
`;