import styled from "styled-components";

export const Hamburguer = styled.div`
    z-index: 1001;
    position: fixed;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: center;
    top: 3rem;
    right: 2.5rem;
    width: 2rem;
    height: 2rem;
     @media (max-width: 900px) {
        display: flex;
    }
    span{
        border-radius: 2rem;
        background-color: var(--header-color);
        height: 0.25rem;
        width: 2rem;
        transition: all 0.3s linear;
        &:nth-child(1){
        }
        &:nth-child(2){

        }
        &:nth-child(3){
        }
    }
`;

