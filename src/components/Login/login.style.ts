import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    background-color: #74c69d;
`;

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    margin: auto;
    background-color: whitesmoke;
    padding: 2rem;
    border-radius: .5rem;
    margin: auto;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const FormContainer = styled.form`
    display: flex;
    background-color: whitesmoke;
    padding: 3rem;
    border-radius: .5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    /* margin: 15% auto;     */
`;

export const FormFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background-color: #e9ecef;
    font-size: .9rem;
    color: #333;
    &:focus {
        outline: none;
        box-shadow: 0 0 5px #2196f3;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #2196f3;
    color: #fff;
    font-size: .9rem;
    cursor: pointer;
    &:hover {
        background-color: #0d8bf2;
    }
`;

export const SwitchButton = styled.button`
    background-color: transparent;
    border: none;
    color: #2196f3;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
