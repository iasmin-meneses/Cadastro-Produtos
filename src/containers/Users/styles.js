import styled from 'styled-components'


import Background from '../../assets/background-2.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;    flex-direction: column;
    gap: 44px;
    align-items: center;   
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border:none;
    outline:none;
    margin-top: 20px;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }
    button{
        background:none;
        cursor: pointer;
        border:none;
    }
    
`;



