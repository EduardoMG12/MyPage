import styled from "styled-components";
import { ContainerItemsStyle } from "../ContainerCarousel/style";


export const ContainerStyle = styled(ContainerItemsStyle)`
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: nowrap;
    width: 100vw;
    overflow-x: auto;
    font-size: 2.5rem;
    gap: 4rem;
    & a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 4rem;

        & img{
            height: 30rem;
            width: 80rem;
            object-fit: cover;
            border-radius: 4rem 4rem 0 0;
        }
        & div{
            background-color: var(--projects-bgd-ballons);
            height: 50rem;
            width: 80rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            color: var(--projects-color-ballons);
            border-radius: 4rem;
        }
        & ul{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
        & i{
            font-size: 3rem;
        
        }
        }
    }

`;