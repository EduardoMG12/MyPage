import styled from "styled-components";

export const Container = styled.section`
    min-height: 100vh;
    background-color: var(--pages-background);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: var(--pages-color);
    
    & ul{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 5rem;
            & li{
                font-size: 10rem;
                
            }
        }
    
`;

export const ImageBgd = styled.div`
    margin-block: 10rem;
    background-repeat: no-repeat;
    background-position: end;
    background-size: cover;
    width: 60vw;
    height: 60vh;
`;
export const TextContent = styled.div`
    text-align: center;
    & h2{ 
        font-size: 4.5rem;
        margin-block: 5rem;
    }
    & p{
        font-size: 3rem;
    
    
    
    }
`;