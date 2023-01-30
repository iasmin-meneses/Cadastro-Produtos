import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    width: 342px;
    height: 74px;
    margin-top: 130px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    padding: 23px 118px;
    border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
    outline:none;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 14px;

    &:hover{
        opacity: 0.8;   
    }

    &:active{
        opacity: 0.5;
    }
    
    img{
        transform: ${props => props.isBack ? 'rotateY(180deg)' : ' '};
    }
`;