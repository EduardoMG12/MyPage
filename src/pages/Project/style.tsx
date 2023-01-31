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
        flex-wrap: wrap;
        gap: 5rem;
            & li{
                font-size: 10rem;
                
            }
        }
    
`;

export const ImageBgd = styled.div`
    margin-block: 10rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 60vw;
    height: 60vh;
    @media (max-width:900px) {
            width: 90vw;
    }
`;
export const TextContent = styled.div`
    text-align: center;
    & h2{ 
        font-size: 4.5rem;
        margin-block: 5rem;
    }
    & div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 15vh;
        width: 90%;
        max-width: 100vw;
        margin: 0 auto;
        & div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            max-width: 100vw;
            width: 40%;
        }
    & p{
        font-size: 3rem;
        margin-bottom: 5rem;
        padding-inline: 2rem;
    }
    }
    @media (max-width:900px) {
        & div{
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        min-height: 15vh;
        width: 90%;
        max-width: 100vw;
            & div{
                flex-direction: row;
                justify-content: space-around;
                gap: 1.5rem;
                max-width: 100vw;
                width: 100%;
                flex-wrap: inherit;
            }
        }
        
    }
`;

export const ExternalLink = styled.div`
    margin-bottom: 5rem;
    &:hover{
        transform: scale(1.05);
    }
    & a img{
        width: 8.5rem;
    }
    transition: 0.4s ease-in-out all;
`;