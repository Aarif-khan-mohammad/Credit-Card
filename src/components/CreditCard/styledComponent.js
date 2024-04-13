import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color:#fff;
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:row;
    @media screen and (max-width:768px){
        flex-direction:column;
    }

`

export const LeftContainer = styled.div`
    width:50%;
    height:100vh;
    display:flex;
    background-color:#3b4b69;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20%;
    @media screen and (max-width:768px){
        width:100%;
    }

`

export const RightContainer = styled.div`
    width:50%;
    height:100vh;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    @media screen and (max-width:768px){
        width:100%;
    }


`

export const Heading = styled.span`
    font-size:30px;
    color:#fff;
    font-weight:bold;
    border-bottom:3px solid #ffd773;
    @media screen and (max-width:768px){
        font-size:20px;
    }
    
`


export const CardImageContainer = styled.div`
    width:55%;
    height:35%;
    background-size:cover;
    border:1px solid #3b4b69;
    border-radius:1rem;
    outline:none;
    background-image:url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png");
    display:flex;
    flex-direction:column;
    gap:1rem;
    @media screen and (max-width:768px){
        width:60%;
        height:60%;
    }

`

export const FormContainer = styled.div`
    width:70%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:2rem;
    align-items:center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:1rem;

    @media screen and (max-width:768px){
        width:60%;
        height:60%;
    }


`

export const InputElement = styled.input`
    width:60%;
    height:50px;
    border-radius:5px;
    border:1px solid #344e7a;
    outline:none;
    padding-left:1rem;
    @media screen and (max-width:768px){
        width:80%;
    }


`

export const Para = styled.h3`
    font-size:2rem;
    color:#344e7a;
    font-weight:bold;
    @media screen and (max-width:768px){
        font-size:1.5rem;
    }

`

export const CardNumber = styled.h1`
    font-size:2rem;
    color:#fff;
    font-weight:bold;
    padding-left:2.6rem;
    padding-top:4rem;
    
    @media screen and (max-width:768px){
        font-size:1.5rem;
    }


`

export const Label = styled.p`
    font-size:0.8rem;
    color:#fff;
    font-weight:500;
    padding-left:2.6rem;
    @media screen and (max-width:768px){
        font-size:0.6rem;
    }


`

export const HolderName = styled.h2`
    font-size:1.4rem;
    color:#fff;
    font-weight:bold;
    padding-left:2.6rem;
    
    @media screen and (max-width:768px){
        font-size:1rem;
    }



`