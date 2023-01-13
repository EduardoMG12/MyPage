import styled from "styled-components";

export const ContainerStyle = styled.section`

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

    
    & img{
        width: 80rem;
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