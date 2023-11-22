import styled from '@emotion/styled';

export const Div = styled.div`
    max-width: 400px; 
    margin: 20px auto;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    text-align: center;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px;

    :last-child {
        border-bottom: none;
    };
`;

export const ItemName = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const ItemNumber = styled.span`
    font-weight: normal;
    margin-left: 15px;
`;

export const Btn = styled.button`
    display: block;
    background-color: #000000; 
    font-size: 20px;
    color: #ffffff; 
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        background-color: #9b59b6;
        transition: 0.3s ease;
    }
`;