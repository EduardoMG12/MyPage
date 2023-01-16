import styled from "styled-components";

export const ContainerStyle = styled.section`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;
    flex-flow: nowrap;
    overflow-x: auto;
    width: fit-content;
    display: flex;
    font-size: 2.5rem;
    gap: 8rem;
    
& a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--projects-bgd-ballons);
    border-radius: 4rem;

    & img{
        width: 80rem;
        border-radius: 4rem 4rem 0 0;
    }
    & div{
        height: 30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: var(--pages-color);
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